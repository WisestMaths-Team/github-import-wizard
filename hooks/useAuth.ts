"use client";

import { useState, useEffect, useCallback, createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import type { UserRole } from "@/lib/types";

const AUTH_KEY = "mathsapp-auth";

export interface AuthUser {
  email: string;
  name: string;
  role: UserRole;
}

interface AuthState {
  user: AuthUser | null;
  role: UserRole | null;
  loading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

function deriveRole(email: string): UserRole {
  return email.endsWith("@teacher.mathsapp.com") ? "teacher" : "student";
}

function deriveName(email: string): string {
  const local = email.split("@")[0] ?? "user";
  return local
    .split(/[._-]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const AuthContext = createContext<AuthState>({
  user: null,
  role: null,
  loading: true,
  login: () => {},
  logout: () => {},
});

export function useAuth(): AuthState {
  return useContext(AuthContext);
}

export { AuthContext };

export function useAuthProvider(): AuthState {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const stored = localStorage.getItem(AUTH_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setUser(parsed);
        // Sync cookie with localStorage on load
        document.cookie = `mathsapp-session=${encodeURIComponent(stored)}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
      }
    } catch {
      // ignore
    }
    setLoading(false);
  }, []);

  const login = useCallback(
    (email: string, _password: string) => {
      const role = deriveRole(email);
      const authUser: AuthUser = { email, name: deriveName(email), role };
      localStorage.setItem(AUTH_KEY, JSON.stringify(authUser));
      // Set HTTP cookie so server-side middleware can verify auth
      document.cookie = `mathsapp-session=${encodeURIComponent(JSON.stringify(authUser))}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
      setUser(authUser);
      router.push(role === "teacher" ? "/teacher/dashboard" : "/courses");
    },
    [router],
  );

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem("mathsapp-course");
    // Clear the auth cookie
    document.cookie = "mathsapp-session=; path=/; max-age=0";
    setUser(null);
    router.push("/login");
  }, [router]);

  return { user, role: user?.role ?? null, loading, login, logout };
}
