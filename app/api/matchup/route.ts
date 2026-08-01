// app/api/matchup/route.ts
import { NextResponse } from "next/server";
import { getMatchupSummary } from "@/app/data/matchups/_index";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const a = searchParams.get("a") ?? undefined;
  const b = searchParams.get("b") ?? undefined;

  const result = await getMatchupSummary(a, b);
  return NextResponse.json(result);
}
