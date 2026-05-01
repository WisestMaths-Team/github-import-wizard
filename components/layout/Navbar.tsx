"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

const studentLinks = [
  { href: "/student/dashboard", label: "Dashboard" },
  { href: "/student/topics", label: "Topics" },
  { href: "/student/questions", label: "Questions" },
  { href: "/student/tutor", label: "AI Tutor" },
];

const teacherLinks = [
  { href: "/teacher/dashboard", label: "Dashboard" },
  { href: "/teacher/topics", label: "All Topics" },
  { href: "/teacher/question-bank", label: "Question Bank" },
  { href: "/teacher/students", label: "My Students" },
];

const publicLinks: { href: string; label: string }[] = [];

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (pathname.startsWith("/student/assessment/")) return null;
  if (pathname === "/") return null;

  const links = user
    ? user.role === "teacher"
      ? teacherLinks
      : studentLinks
    : publicLinks;

  const initials = user
    ? user.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-accent to-secondary text-white font-black text-sm shadow-glow-sm transition-transform group-hover:scale-105">
            W
          </span>
          <span className="text-[13px] font-semibold tracking-[0.18em] uppercase text-foreground/90">
            Wisest Maths
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active =
              pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground",
                  )}
                >
                  {l.label}
                  {active && (
                    <span className="absolute -bottom-[1px] left-3.5 right-3.5 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-secondary text-xs font-bold text-white shadow-glow-sm transition-transform hover:scale-105"
                aria-label="User menu"
              >
                {initials}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-11 w-56 overflow-hidden rounded-xl border border-black/10 bg-white shadow-lg backdrop-blur-xl">
                  <div className="border-b border-black/5 px-4 py-3">
                    <p className="text-sm font-semibold text-foreground">{user.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                  <Link
                    href={user.role === "teacher" ? "/teacher/dashboard" : "/student/dashboard"}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-black/5 hover:text-foreground transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/courses"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-black/5 hover:text-foreground transition-colors"
                  >
                    Switch Course
                  </Link>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      logout();
                    }}
                    className="block w-full border-t border-black/5 px-4 py-2.5 text-left text-sm text-destructive hover:bg-destructive/10 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="hidden rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-glow-sm md:inline-flex"
            >
              Log in
            </Link>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-foreground/70 hover:bg-black/5 hover:text-foreground transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5h14M3 10h14M3 15h14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/5 bg-white/95 backdrop-blur-xl px-4 py-4 md:hidden">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    pathname === l.href
                      ? "bg-black/5 text-foreground"
                      : "text-foreground/60 hover:bg-black/5 hover:text-foreground",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-black/5 mt-2">
              {user ? (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    logout();
                  }}
                  className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-foreground/60 hover:bg-black/5 hover:text-foreground"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md bg-foreground px-3 py-2 text-center text-sm font-semibold text-white"
                >
                  Log in
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
