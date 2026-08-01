// app/data/matchups/_index.ts
//
// ⚠️ 서버 전용 모듈. fs로 _compiled.json을 읽기 때문에 브라우저(클라이언트 컴포넌트)에서
// 직접 import하면 안 됨 — 클라이언트에서는 /api/matchup을 통해 조회할 것 (MatchupSummaryBox.tsx 참고).
import fs from "node:fs";
import path from "node:path";
import type { MatchupSummary } from "./_types";

export type MatchupLoadResult =
  | { status: "ok"; data: MatchupSummary }
  | { status: "missing"; key: string };

const COMPILED_PATH = path.join(process.cwd(), "app/data/matchups/_compiled.json");

// 서버리스 함수 콜드스타트당 한 번만 읽고, 이후 요청은 모듈 스코프 캐시를 재사용한다.
// 로컬 개발(dev)에서는 매치업 파일을 저장하는 즉시 반영되도록 캐싱하지 않고 매 요청마다 새로 읽는다.
const IS_DEV = process.env.NODE_ENV !== "production";
let cache: Record<string, MatchupSummary> | null = null;

function loadCompiled(): Record<string, MatchupSummary> {
  if (IS_DEV) {
    const raw = fs.readFileSync(COMPILED_PATH, "utf8");
    return JSON.parse(raw) as Record<string, MatchupSummary>;
  }
  if (!cache) {
    const raw = fs.readFileSync(COMPILED_PATH, "utf8");
    cache = JSON.parse(raw) as Record<string, MatchupSummary>;
  }
  return cache;
}

export async function getMatchupSummary(
  a?: string,
  b?: string
): Promise<MatchupLoadResult | null> {
  if (!a || !b || a === b) return null;

  const [base, other] = a < b ? [a, b] : [b, a];
  const key = `${base}_${other}`;

  const data = loadCompiled()[key];

  if (!data) {
    return { status: "missing", key };
  }

  return { status: "ok", data };
}
