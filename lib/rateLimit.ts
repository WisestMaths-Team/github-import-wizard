/**
 * Rate Limiting — DDoS & Flood Control
 *
 * In-memory sliding window rate limiter for Next.js Edge middleware
 * and API routes. For production, replace with @upstash/ratelimit
 * backed by Redis for multi-instance support.
 *
 * Three tiers:
 *   - Global:  100 requests / 15 minutes per IP
 *   - Auth:    5 requests / 1 minute per IP (login, register)
 *   - AI/Pay:  10 requests / 1 minute per IP (LLM calls, payments)
 */

interface RateLimitEntry {
  timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

// Clean stale entries every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of store) {
      entry.timestamps = entry.timestamps.filter((t) => now - t < 15 * 60 * 1000);
      if (entry.timestamps.length === 0) store.delete(key);
    }
  }, 5 * 60 * 1000);
}

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export const RATE_LIMITS = {
  global: { maxRequests: 100, windowMs: 15 * 60 * 1000 } as RateLimitConfig,
  auth: { maxRequests: 5, windowMs: 60 * 1000 } as RateLimitConfig,
  ai: { maxRequests: 30, windowMs: 60 * 1000 } as RateLimitConfig,
  payment: { maxRequests: 5, windowMs: 60 * 1000 } as RateLimitConfig,
};

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number | null;
}

/**
 * Check if a request from the given identifier is within the rate limit.
 *
 * @param identifier - Typically the client IP or user ID
 * @param tier - Which rate limit tier to apply
 */
export function checkRateLimit(
  identifier: string,
  tier: keyof typeof RATE_LIMITS = "global"
): RateLimitResult {
  const config = RATE_LIMITS[tier];
  const key = `${tier}:${identifier}`;
  const now = Date.now();

  let entry = store.get(key);
  if (!entry) {
    entry = { timestamps: [] };
    store.set(key, entry);
  }

  // Remove timestamps outside the window
  entry.timestamps = entry.timestamps.filter((t) => now - t < config.windowMs);

  if (entry.timestamps.length >= config.maxRequests) {
    const oldestInWindow = entry.timestamps[0];
    const retryAfterMs = config.windowMs - (now - oldestInWindow);
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs,
    };
  }

  entry.timestamps.push(now);
  return {
    allowed: true,
    remaining: config.maxRequests - entry.timestamps.length,
    retryAfterMs: null,
  };
}

/**
 * Helper for API route handlers. Returns a Response if rate-limited,
 * or null if the request is allowed.
 */
export function rateLimitResponse(
  identifier: string,
  tier: keyof typeof RATE_LIMITS = "global"
): Response | null {
  const result = checkRateLimit(identifier, tier);

  if (!result.allowed) {
    return new Response(
      JSON.stringify({
        error: "Too many requests. Please try again later.",
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": String(Math.ceil((result.retryAfterMs ?? 60000) / 1000)),
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  return null;
}
