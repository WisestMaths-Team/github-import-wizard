/**
 * BOLA Prevention — Content Ownership & Access Control
 *
 * Server-side service that verifies a user has the right to access
 * specific content before serving it. Prevents Broken Object Level
 * Authorization (OWASP API Security Top 10 #1).
 *
 * NEVER rely on frontend-only checks. This runs on the server.
 */

// ── Types ────────────────────────────────────────────────────────────
export type SubscriptionTier = "free" | "subscribed" | "trial";

export interface UserRecord {
  id: string;
  role: "student" | "teacher" | "admin";
  subscriptionTier: SubscriptionTier;
  subscriptionExpiry: Date | null;
}

export interface ContentRecord {
  id: string;
  requiresSubscription: boolean;
  allowedRoles: ("student" | "teacher" | "admin")[];
}

// ── Error classes ────────────────────────────────────────────────────
export class ForbiddenError extends Error {
  public readonly statusCode = 403;
  constructor(message = "You do not have access to this content.") {
    super(message);
    this.name = "ForbiddenError";
  }
}

export class NotFoundError extends Error {
  public readonly statusCode = 404;
  constructor(message = "Content not found.") {
    super(message);
    this.name = "NotFoundError";
  }
}

// ── Mock database queries (replace with Prisma when DB is set up) ────
// In production, these query the database directly.

async function findUserById(userId: string): Promise<UserRecord | null> {
  void userId;
  // TODO: Replace with Prisma query
  // return prisma.user.findUnique({ where: { id: userId } });
  return null; // Placeholder
}

async function findContentById(contentId: string): Promise<ContentRecord | null> {
  void contentId;
  // TODO: Replace with Prisma query
  // return prisma.content.findUnique({ where: { id: contentId } });
  return null; // Placeholder
}

async function checkPurchasedContent(
  userId: string,
  contentId: string
): Promise<boolean> {
  void userId;
  void contentId;
  // TODO: Replace with Prisma query
  // const record = await prisma.purchasedContent.findFirst({
  //   where: { userId, contentId },
  // });
  // return record !== null;
  return false; // Placeholder
}

// ── Core access control function ─────────────────────────────────────

/**
 * Verifies that a user has the right to access specific content.
 * Throws ForbiddenError (403) if access is denied.
 * Throws NotFoundError (404) if user or content doesn't exist.
 *
 * Access is granted if ANY of these conditions are true:
 * 1. The user is an admin
 * 2. The content does not require a subscription
 * 3. The user has an active subscription (not expired)
 * 4. The user has individually purchased this content
 *
 * @param userId - The authenticated user's ID (from session, NOT from request body)
 * @param contentId - The content being requested
 * @returns The content record if access is granted
 */
export async function getContentForUser(
  userId: string,
  contentId: string
): Promise<ContentRecord> {
  // ── Step 1: Verify the user exists ─────────────────────────────
  const user = await findUserById(userId);
  if (!user) {
    throw new NotFoundError("User not found.");
  }

  // ── Step 2: Verify the content exists ──────────────────────────
  const content = await findContentById(contentId);
  if (!content) {
    throw new NotFoundError("Content not found.");
  }

  // ── Step 3: Role check ─────────────────────────────────────────
  if (!content.allowedRoles.includes(user.role) && user.role !== "admin") {
    throw new ForbiddenError("Your role does not have access to this content.");
  }

  // ── Step 4: Admin bypass ───────────────────────────────────────
  if (user.role === "admin") {
    return content;
  }

  // ── Step 5: Free content — no subscription needed ──────────────
  if (!content.requiresSubscription) {
    return content;
  }

  // ── Step 6: Active subscription check ──────────────────────────
  if (
    user.subscriptionTier === "subscribed" &&
    user.subscriptionExpiry &&
    user.subscriptionExpiry > new Date()
  ) {
    return content;
  }

  // ── Step 7: Individual purchase check ──────────────────────────
  const hasPurchased = await checkPurchasedContent(userId, contentId);
  if (hasPurchased) {
    return content;
  }

  // ── Step 8: Access denied ──────────────────────────────────────
  throw new ForbiddenError(
    "An active subscription is required to access this content."
  );
}

/**
 * Helper for API route handlers. Catches ForbiddenError and NotFoundError
 * and returns an appropriate JSON Response. Never leaks internal details.
 */
export function handleAccessError(error: unknown): Response {
  if (error instanceof ForbiddenError) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 403, headers: { "Content-Type": "application/json" } }
    );
  }
  if (error instanceof NotFoundError) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }
  // Unknown error — log internally, return generic message
  console.error("[ContentAccess] Unexpected error:", error);
  return new Response(
    JSON.stringify({ error: "An unexpected error occurred." }),
    { status: 500, headers: { "Content-Type": "application/json" } }
  );
}
