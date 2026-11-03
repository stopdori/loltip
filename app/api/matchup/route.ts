// app/api/matchup/route.ts
import { NextResponse } from "next/server";
import { getMatchupSummary, toMatchupClientResult } from "@/app/data/matchups/_index";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const a = searchParams.get("a") ?? undefined;
  const b = searchParams.get("b") ?? undefined;
  // 요청 locale 문장만 반환(없거나 잘못된 값이면 기본 로케일 ko)
  const lang = searchParams.get("locale") === "en" ? "en" : "ko";

  const result = await getMatchupSummary(a, b);
  return NextResponse.json(result ? toMatchupClientResult(result, lang) : result, {
    headers: {
      // Cloudflare 엣지(Workers Cache)에만 5분 캐시 — 클라이언트에 전달되기 전에 Cloudflare가 제거하는 헤더라
      // 브라우저 캐시 동작은 그대로다. Cache-Control이 없으면 휴리스틱으로 2시간 캐시되므로 명시한다.
      "Cloudflare-CDN-Cache-Control": "max-age=300",
    },
  });
}
