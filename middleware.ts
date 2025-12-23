import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Public pages only
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in",
  "/sign-up",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const { pathname } = new URL(req.url);

  const isApiRequest = pathname.startsWith("/api");

  /* ---------------- NOT LOGGED IN ---------------- */
  if (!userId) {
    // Allow only public pages
    if (isPublicRoute(req)) {
      return NextResponse.next();
    }

    // Block ALL APIs (including /api/videos)
    if (isApiRequest) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Block protected pages
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  /* ---------------- LOGGED IN ---------------- */
  // Prevent logged-in users from visiting auth pages
  if (isPublicRoute(req) && pathname !== "/home") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
