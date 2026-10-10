// app/data/champClientData.ts
//
// 클라이언트(SkillTagsPanel/UltCooldownBox)로 넘길 챔피언 데이터를 서버에서 골라 만든다.
// 전체 CHAMPS를 클라이언트 번들에 넣지 않기 위해, 서버 페이지(champ/[id], champ-embed)가
// 해당 챔피언 1명분만 이 함수로 뽑아 prop으로 내려준다.
// 화면에 실제로 쓰는 필드만 넘긴다 — vision은 SkillTagsPanel의 VISION_TAB_ENABLED가 false라
// 화면에 안 나오므로 제외(시야 탭을 켤 때 여기 PICK_KEYS에도 "vision"을 추가할 것).
import "server-only";
import { CHAMPS } from "./champs/_index";
import type { ChampData } from "./interactions/types";

export type ChampClientData = Pick<
  ChampData,
  "skills" | "gimmick" | "notes" | "ultCooldown" | "placeholderOverrides" | "skillTooltip"
>;

const PICK_KEYS = ["skills", "gimmick", "notes", "ultCooldown", "placeholderOverrides", "skillTooltip"] as const;

export function getChampClientData(champId: string): ChampClientData | null {
  const champ = CHAMPS[champId as keyof typeof CHAMPS] as ChampData | undefined;
  if (!champ) return null;
  const out: Partial<ChampClientData> = {};
  for (const key of PICK_KEYS) {
    if (champ[key] !== undefined) (out as Record<string, unknown>)[key] = champ[key];
  }
  return out as ChampClientData;
}
