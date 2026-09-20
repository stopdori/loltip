// 매치업 페이지의 좌/우 배치 순서를 "브라우저 세션(SPA 런타임) 메모리"에만 잠깐 기억해두는 힌트.
//
// 예전엔 /matchup/{pair}?first={왼쪽챔프} 쿼리로 순서를 전달했지만, 쿼리를 없애고
// 서버는 항상 알파벳순 canonical 순서로만 렌더링한다. 대신 챔피언 선택 UI(픽커)에서
// 매치업 페이지로 이동하는 순간에 이 모듈 변수에 "방금 고른 순서"를 저장해두고,
// 매치업 페이지 클라이언트 래퍼(MatchupChampClient)가 마운트할 때 읽어서 초기 배치에 반영한다.
//
// - localStorage/sessionStorage는 쓰지 않는다: hydration 이후 비동기 반영으로 인한 깜빡임을
//   피하기 위함이고, 새로고침/재방문/공유 링크는 알파벳순 기본값이면 충분하다.
// - 이 모듈은 클라이언트 클릭 핸들러(saveMatchupOrderHint)에서만 쓰기가 일어난다.
//   서버(SSR)에서는 아무도 쓰지 않으므로 Map이 항상 비어 있어 SSR 결과와 충돌하지 않는다.
//   (서버 모듈 변수는 요청 간 공유되므로 절대 렌더 중에 쓰지 말 것)
//
// 유효 범위
// - 저장 직후 "첫 매치"까지는 TTL(10초) 안에 매치되어야 한다 (push가 취소되거나 이동이
//   지연/무산된 경우 오래된 힌트가 엉뚱하게 살아있는 것을 막기 위함).
// - 한 번 매치된 뒤에는 TTL과 무관하게, 브라우저 세션 동안(언어 토글/뒤로가기로 재마운트되어도,
//   다른 pair를 갔다가 돌아와도) 그 pair의 순서가 계속 유지된다. 같은 pair를 다시 고르면
//   (saveMatchupOrderHint) 새 값으로 덮어써진다.
// - pair 키가 일치하지 않으면 무시하므로 다른 pair에 재사용되지 않는다.

const UNMATCHED_TTL_MS = 10_000;

type Hint = {
  pair: string;
  first: string;
  savedAt: number;
  matched: boolean;
};

// pair별로 각각 저장한다(슬롯 1개면 다른 pair를 고른 뒤 뒤로가기로 돌아왔을 때 이전 pair의 순서가 사라진다).
// 브라우저 탭 세션 동안만 살아있고 항목 수는 사용자가 고른 pair 수만큼이라 무시할 수 있는 크기다.
const hints = new Map<string, Hint>();

export function toPairKey(a: string, b: string): string {
  return [a, b].sort().join("-vs-");
}

// 픽커에서 매치업 페이지로 push하기 직전에 호출: first = 왼쪽(my)에 놓을 챔피언 id
export function saveMatchupOrderHint(first: string, other: string): void {
  const pair = toPairKey(first, other);
  hints.set(pair, { pair, first, savedAt: Date.now(), matched: false });
}

// 렌더 중 호출해도 안전한 순수 조회(상태를 바꾸지 않음 — StrictMode 이중 호출 대비).
// 유효한 힌트면 왼쪽에 놓을 챔피언 id, 아니면 null.
export function peekMatchupOrderHint(pair: string): string | null {
  const hint = hints.get(pair);
  if (!hint) return null;
  if (!hint.matched && Date.now() - hint.savedAt > UNMATCHED_TTL_MS) return null;
  return hint.first;
}

// 매치업 페이지가 마운트되어 힌트를 실제로 사용했을 때 effect에서 호출:
// 이후로는 TTL 없이 브라우저 세션 동안 그 pair의 순서가 유지된다.
export function markMatchupOrderHintMatched(pair: string): void {
  const hint = hints.get(pair);
  if (hint) hint.matched = true;
}
