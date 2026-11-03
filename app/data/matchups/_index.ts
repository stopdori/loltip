// app/data/matchups/_index.ts
//
// ⚠️ 서버 전용 모듈. _compiled.json(전체 매치업 데이터)을 import하기 때문에 브라우저(클라이언트 컴포넌트)에서
// 직접 import하면 안 됨 — 클라이언트에서는 /api/matchup을 통해 조회할 것 (MatchupSummaryBox.tsx 참고).
// import "server-only": 클라이언트 컴포넌트에서 import하면 빌드 에러로 막는다(데이터 노출 방지).
import "server-only";
import compiled from "./_compiled.json";
import { countHighlights, hasMatchupContent, isMatchupIndexable, type MatchupSummary } from "./_types";

export type MatchupLoadResult =
  | { status: "ok"; data: MatchupSummary }
  | { status: "missing"; key: string };

type MatchupLang = "ko" | "en";

// 클라이언트로 내려보내는 형태(매치업 페이지 prop, /api/matchup 응답) — 요청 locale 문장만 남긴다.
// 화면(MatchupSummaryBox)은 highlightsByChamp[챔피언][lang]과 common[lang]만 쓰므로 summary는 넘기지 않는다.
export type MatchupClientData = {
  champs: [string, string];
  highlightsByChamp: Record<string, Partial<Record<MatchupLang, string[]>>>;
  common?: Partial<Record<MatchupLang, string[]>>;
};

export type MatchupClientResult =
  | { status: "ok"; data: MatchupClientData }
  | { status: "missing"; key: string };

export function toMatchupClientResult(result: MatchupLoadResult, lang: MatchupLang): MatchupClientResult {
  if (result.status !== "ok") return result;
  const { champs, highlightsByChamp, common } = result.data;
  const data: MatchupClientData = { champs, highlightsByChamp: {} };
  for (const [champId, byLang] of Object.entries(highlightsByChamp)) {
    data.highlightsByChamp[champId] = { [lang]: byLang[lang] ?? [] };
  }
  if (common) data.common = { [lang]: common[lang] ?? [] };
  return { status: "ok", data };
}

// 정적 import라 런타임 파일 시스템 없이(Cloudflare Workers 등) 서버 번들에 포함된다.
// 파일별 동적 import로 바꾸지 말 것 — 빌드 파일 트레이스가 매치업 파일 수만큼 폭증한다(CLAUDE.md 참고).
// 로컬 개발(dev)에서는 watch:matchup이 _compiled.json을 다시 쓰면 번들러가 모듈을 갱신한다.
const COMPILED = compiled as unknown as Record<string, MatchupSummary>;

function loadCompiled(): Record<string, MatchupSummary> {
  return COMPILED;
}

export type ChampMatchupEntry = {
  // 상호작용 페이지 canonical 슬러그(알파벳순 "a-b", /{locale}/interactions/{pair})
  pair: string;
  opponentId: string;
  // 이 로케일에서 그 매치업 페이지가 보여주는 판정 문장 수(두 챔피언 각각 + 공통, 빈 문자열 제외)
  sentenceCount: number;
};

// 챔프 페이지의 "이 챔피언이 등장하는 매치업" 링크 목록용.
// 해당 챔피언이 포함된 조합 중 **현재 로케일에 판정 문장이 하나라도 있는 것**을 반환한다.
// 색인 기준(isMatchupIndexable, 문장 MIN_HIGHLIGHTS_FOR_INDEX개 이상)보다 넓다 — 사용자 접근 경로라
// noindex(follow) 페이지도 링크한다. 판정 문장이 없는 조합은 화면이 비어 있으므로 제외.
// (KO에만 내용이 있는 쌍은 lang="en"이면 제외된다 — lang은 반드시 현재 로케일로 넘길 것.)
// 프로덕션에서는 loadCompiled()의 모듈 캐시를 재사용하고, 14,878개를 한 번 훑는 비용(≈1ms)뿐이다.
export function listLinkableMatchupsForChamp(
  champId: string,
  lang: "ko" | "en"
): ChampMatchupEntry[] {
  const out: ChampMatchupEntry[] = [];
  for (const data of Object.values(loadCompiled())) {
    const [a, b] = data.champs;
    if (a !== champId && b !== champId) continue;
    if (!hasMatchupContent(data, a, b, lang)) continue;
    out.push({
      pair: [a, b].sort().join("-"),
      opponentId: a === champId ? b : a,
      sentenceCount: countHighlights(data, a, b, lang),
    });
  }
  return out;
}

export type TopMatchupEntry = {
  // 상호작용 페이지 canonical 슬러그(알파벳순 "a-b")
  pair: string;
  champs: [string, string];
  sentenceCount: number;
};

// 홈(/champ)의 "판정이 많은 상호작용" 목록용 — 현재 로케일에서 색인 대상인 쌍 중
// 판정 문장 수 상위 limit개. 동점은 pair 알파벳순으로 고정해 렌더링마다 순서가 바뀌지 않게 한다.
export function listTopIndexableMatchups(lang: "ko" | "en", limit: number): TopMatchupEntry[] {
  const out: TopMatchupEntry[] = [];
  for (const data of Object.values(loadCompiled())) {
    const [a, b] = data.champs;
    if (!isMatchupIndexable(data, a, b, lang)) continue;
    const champs = [a, b].sort() as [string, string];
    out.push({ pair: champs.join("-"), champs, sentenceCount: countHighlights(data, a, b, lang) });
  }
  out.sort((x, y) => y.sentenceCount - x.sentenceCount || x.pair.localeCompare(y.pair));
  return out.slice(0, limit);
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
