import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const acceptLanguage = req.headers.get("accept-language") || "en";
  const baseLang = acceptLanguage.split(",")[0].split("-")[0];

  if (["de", "at", "ch"].includes(baseLang)) {
    return NextResponse.redirect(new URL("/de", req.url));
  }

  return NextResponse.redirect(new URL("/en", req.url));
}