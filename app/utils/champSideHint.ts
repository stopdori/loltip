// /champ/[id] 페이지에서 "이 챔피언 한 명을 왼쪽/오른쪽 중 어느 쪽에 표시할지"를
// 브라우저 세션(SPA 런타임) 메모리에만 잠깐 기억해두는 힌트.
//
// 예전엔 /champ/{id}?side=my|enemy 쿼리로 전달했지만(my=왼쪽, enemy=오른쪽 — 이름만 레거시고
// 실제로는 순수한 좌/우 표시 순서), 쿼리를 없애고 서버는 항상 기본(왼쪽)으로만 렌더링한다.
// matchupOrderHint.ts와 같은 규칙:
// - localStorage/sessionStorage 미사용(hydration 후 비동기 반영 깜빡임 방지), 새로고침/재방문/
//   공유 링크는 기본(왼쪽)으로 돌아가도 무방.
// - 쓰기는 클라이언트 클릭 핸들러(saveChampSideHint)에서만. SSR에서는 Map이 항상 비어 있다.
// - 저장 후 "첫 매치"까지만 TTL(10초)이 적용되고, 한 번 매치되면 세션 동안(언어 토글/뒤로가기 포함)
//   유지된다. 같은 champId를 다시 저장하면 덮어쓴다.
//
// 키가 pair가 아니라 champId인 이유: /champ/[id]에는 챔피언이 한 명뿐이라서.

export type ChampSide = "my" | "enemy";

const UNMATCHED_TTL_MS = 10_000;

type Hint = { side: ChampSide; savedAt: number; matched: boolean };

const hints = new Map<string, Hint>();

// /champ/{champId}로 이동하기 직전에 호출
export function saveChampSideHint(champId: string, side: ChampSide): void {
  hints.set(champId, { side, savedAt: Date.now(), matched: false });
}

// 렌더 중 호출해도 안전한 순수 조회(StrictMode 이중 호출 대비). 유효하면 side, 아니면 null.
export function peekChampSideHint(champId: string): ChampSide | null {
  const hint = hints.get(champId);
  if (!hint) return null;
  if (!hint.matched && Date.now() - hint.savedAt > UNMATCHED_TTL_MS) return null;
  return hint.side;
}

// 힌트를 실제로 사용했을 때 effect에서 호출 → 이후 TTL 없이 세션 동안 유지
export function markChampSideHintMatched(champId: string): void {
  const hint = hints.get(champId);
  if (hint) hint.matched = true;
}
