// app/data/matchups/_index.ts
//
// ⚠️ 서버 전용 모듈. fs로 _compiled.json을 읽기 때문에 브라우저(클라이언트 컴포넌트)에서
// 직접 import하면 안 됨 — 클라이언트에서는 /api/matchup을 통해 조회할 것 (MatchupSummaryBox.tsx 참고).
import fs from "node:fs";
import path from "node:path";
import { isMatchupIndexable, type MatchupSummary } from "./_types";

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

export type ChampMatchupEntry = {
  // 매치업 페이지 canonical 슬러그(알파벳순 "a-vs-b")
  pair: string;
  opponentId: string;
  // 이 로케일에서 그 매치업 페이지가 보여주는 판정 문장 수(두 챔피언 각각 + 공통, 빈 문자열 제외)
  sentenceCount: number;
};

// 챔프 페이지의 "이 챔피언이 등장하는 매치업" 링크 목록용.
// 해당 챔피언이 포함된 조합 중 **현재 로케일에서 색인 대상인 것만** 반환한다 — 판정은
// generateMetadata(noindex)/sitemap과 같은 공용 함수(isMatchupIndexable)를 쓰고, 데이터도
// 매치업 페이지와 같은 _compiled.json에서 읽으므로 noindex 페이지로 링크가 뻗지 않는다.
// (KO에만 내용이 있는 쌍은 lang="en"이면 제외된다 — lang은 반드시 현재 로케일로 넘길 것.)
// 프로덕션에서는 loadCompiled()의 모듈 캐시를 재사용하고, 14,878개를 한 번 훑는 비용(≈1ms)뿐이다.
export function listIndexableMatchupsForChamp(
  champId: string,
  lang: "ko" | "en"
): ChampMatchupEntry[] {
  const count = (arr: string[] | undefined) => (arr ?? []).filter((s) => s !== "").length;
  const out: ChampMatchupEntry[] = [];
  for (const data of Object.values(loadCompiled())) {
    const [a, b] = data.champs;
    if (a !== champId && b !== champId) continue;
    if (!isMatchupIndexable(data, a, b, lang)) continue;
    out.push({
      pair: [a, b].sort().join("-vs-"),
      opponentId: a === champId ? b : a,
      sentenceCount:
        count(data.highlightsByChamp?.[a]?.[lang]) +
        count(data.highlightsByChamp?.[b]?.[lang]) +
        count(data.common?.[lang]),
    });
  }
  return out;
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
