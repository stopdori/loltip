import { aatrox_fizz } from "./aatrox/aatrox_fizz";
import type { MatchupSummary } from "./_types";

/*
  핵심:
  "aatrox-vs-fizz" → 실제 데이터 찾는 테이블
  (나중에 매치업 늘어나면 여기에만 추가하면 됨)
*/

const MATCHUP_MAP: Record<string, MatchupSummary> = {
  "aatrox-vs-fizz": aatrox_fizz,
};

/**
 * 순서가 바뀌어도 동일 매치업으로 인식
 * fizz-vs-aatrox → aatrox-vs-fizz 로 정규화
 */
export function getMatchup(a: string, b: string): MatchupSummary | null {
  const key1 = `${a}-vs-${b}`;
  const key2 = `${b}-vs-${a}`;

  return MATCHUP_MAP[key1] ?? MATCHUP_MAP[key2] ?? null;
}