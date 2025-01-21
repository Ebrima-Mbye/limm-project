import { NextResponse } from "next/server";

export function middleware(req) {
  const lang = req.cookies.get("language") || "en";
  req.nextUrl.searchParams.set("lang", lang);
  console.log(req.cookies);
  return NextResponse.next();
}
