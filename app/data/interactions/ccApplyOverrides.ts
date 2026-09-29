// app/data/interactions/ccApplyOverrides.ts
//
// 챔피언 파일 gimmick 필드에 태그된 CC 중 적에게 걸리지 않는 것(자신·아군
// 대상)을 적 CC 목록(enemyCC.ts getEnemyCC)에서 제외하기 위한 예외 목록.
// 챔피언 파일의 태그는 그대로 두고, 여기서 "적에게는 안 걸림"만 표시한다.
// phase가 없으면 해당 슬롯(form 지정 시 그 폼)의 전체 phase에 적용.

import type { TagId } from "./tags";
import type { SkillKey } from "./types";

export type CCApplyOverride = {
  champ: string;             // app/data/champs/ 파일명과 같은 id
  slot: SkillKey;
  form?: string;             // "base" | "alt" | ... (폼 있는 챔피언만)
  phase?: string;            // gimmick 필드 phase ko 라벨
  tag: TagId;
  target: "SELF" | "ALLY";
  note?: { ko: string; en: string };
};

export const CC_APPLY_OVERRIDES: CCApplyOverride[] = [];
