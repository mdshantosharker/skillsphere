import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    const currentUrl = request.nextUrl.pathname;

    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callback", currentUrl);

    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/profile", "/courses/:path+"],
};
