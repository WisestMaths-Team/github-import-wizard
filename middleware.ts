import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js Middleware — runs on the Edge runtime BEFORE any page renders.
 *
 * Protected routes: /student/*, /teacher/*, /courses/*
 * Public routes: /, /login, /api/*, /_next/*, static assets
 *
 * Auth is verified via the `mathsapp-session` cookie set on login.
 * Teacher routes additionally require role === "teacher".
 */

const PUBLIC_PATHS = new Set(["/", "/login"]);

function isPublicPath(pathname: string): boolean {
  if (PUBLIC_PATHS.has(pathname)) return true;
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/api")) return true;
  if (/\.(svg|png|jpg|jpeg|gif|ico|woff|woff2|css|js|map)$/.test(pathname)) return true;
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths through without auth check
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // Check for auth cookie
  const sessionCookie = request.cookies.get("mathsapp-session");

  if (!sessionCookie?.value) {
    // No session — redirect to login
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Parse session to check role for teacher routes
  try {
    const session = JSON.parse(decodeURIComponent(sessionCookie.value));

    if (pathname.startsWith("/teacher") && session.role !== "teacher") {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  } catch {
    // Invalid cookie — clear it and redirect to login
    const loginUrl = new URL("/login", request.url);
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete("mathsapp-session");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on all routes except Next.js internals and static files
    "/((?!_next/static|_next/image|favicon).*)",
  ],
};
