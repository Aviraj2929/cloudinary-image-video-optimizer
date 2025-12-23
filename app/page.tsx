"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomePage() {
  const pathname = usePathname();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center pb-24">
      {/* Your main content */}
      <h1 className="text-4xl font-bold mb-6">Welcome to My SaaS</h1>
      <p className="text-gray-500 mb-10">
        Upload, manage, and view your videos securely.
      </p>

      {/* DaisyUI Dock */}
      <div className="dock dock-lg fixed bottom-4 left-1/2 -translate-x-1/2 bg-base-200 z-50">
        
        {/* Home */}
        <Link href="/" className={pathname === "/" ? "dock-active" : ""}>
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="1 11 12 2 23 11" />
              <path d="m5,13v7a2,2 0 0 0 2,2h10a2,2 0 0 0 2-2v-7" />
            </g>
          </svg>
          <span className="dock-label">Home</span>
        </Link>

        {/* Sign In */}
        <Link
          href="/sign-in"
          className={pathname === "/sign-in" ? "dock-active" : ""}
        >
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 17l5-5-5-5" />
              <path d="M15 12H3" />
              <path d="M21 12a9 9 0 1 1-9-9" />
            </g>
          </svg>
          <span className="dock-label">Sign In</span>
        </Link>

        {/* Sign Up */}
        <Link
          href="/sign-up"
          className={pathname === "/sign-up" ? "dock-active" : ""}
        >
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="7" r="4" />
              <path d="M17 11v6" />
              <path d="M14 14h6" />
              <path d="M3 21a6 6 0 0 1 12 0" />
            </g>
          </svg>
          <span className="dock-label">Sign Up</span>
        </Link>
      </div>
    </main>
  );
}
