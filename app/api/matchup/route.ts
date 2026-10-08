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
  return NextResponse.json(result ? toMatchupClientResult(result, lang) : result);
}
