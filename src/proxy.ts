import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_HOST, SITE_URL, SITE_WWW_HOST } from "@/lib/site";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();

  if (host === SITE_WWW_HOST) {
    const { pathname, search } = request.nextUrl;
    return NextResponse.redirect(`${SITE_URL}${pathname}${search}`, 301);
  }

  // Keep preview / alternate hosts out of the preferred-domain story.
  if (host && host !== SITE_HOST && host.endsWith(".vercel.app")) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
