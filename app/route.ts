import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const acceptLanguage = req.headers.get("accept-language") || "en";
  const baseLang = acceptLanguage.split(",")[0].split("-")[0];

  const host = req.headers.get("host");
  const protocol = req.headers.get("x-forwarded-proto") ?? "https";

  const targetLang = ["de", "at", "ch"].includes(baseLang) ? "de" : "en";

  return NextResponse.redirect(
    new URL(`/${targetLang}`, `${protocol}://${host}`)
  );
}