"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppSidebar } from "@/components/layout/Sidebar";
import { RouteGuard } from "@/components/auth/RouteGuard";
import { useCourse } from "@/hooks/useCourse";

const studentLinks = [
  { href: "/student/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/student/topics", label: "Topics", icon: "📚" },
  { href: "/student/questions", label: "Questions", icon: "✏️" },
  { href: "/student/tutor", label: "AI Tutor", icon: "🤖" },
];

function CourseGuard({ children }: { children: React.ReactNode }) {
  const { course, loading } = useCourse();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !course) {
      router.replace("/courses");
    }
  }, [course, loading, router]);

  if (loading || !course) return null;

  return <>{children}</>;
}

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { course, clearCourse } = useCourse();

  const courseLabel =
    course === "a-level-maths" ? "A-Level Maths" : "A-Level Further Maths";

  const courseSwitcher = (
    <button
      onClick={clearCourse}
      className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
    >
      <span className="text-sm">🔄</span>
      <span className="truncate">{courseLabel}</span>
    </button>
  );

  return (
    <RouteGuard>
      <CourseGuard>
        <div className="flex">
          <AppSidebar
            links={studentLinks}
            title="Student"
            extra={courseSwitcher}
          />
          <div className="flex-1 p-4 sm:p-6 lg:p-8">{children}</div>
        </div>
      </CourseGuard>
    </RouteGuard>
  );
}
