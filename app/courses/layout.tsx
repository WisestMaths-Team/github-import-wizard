"use client";

import { RouteGuard } from "@/components/auth/RouteGuard";

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <RouteGuard>
      <div className="flex-1">{children}</div>
    </RouteGuard>
  );
}
