// middleware.ts
import { auth } from "./auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;
  
  console.log(`Middleware: Path=${pathname}, LoggedIn=${isLoggedIn}, Auth=${JSON.stringify(req.auth)}`);
  
  // Allow access to auth API routes and public pages
  if (
    pathname.startsWith('/api/auth') ||
    pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/favicon.ico'
  ) {
    console.log(`Allowing access to: ${pathname}`);
    return NextResponse.next();
  }
  
  // Redirect unauthenticated users to login
  if (!isLoggedIn) {
    console.log(`Redirecting unauthenticated user from ${pathname} to /login`);
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
  console.log(`Allowing access to protected route: ${pathname}`);
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};