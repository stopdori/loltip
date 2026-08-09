// app/data/matchups/annie/annie_gnar.ts
import type { MatchupSummary } from "../_types";

export const annie_gnar: MatchupSummary = {
  champs: ["annie", "gnar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 나르 미니폼 E / 메가폼 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "R(티버)의 [[SUMMON]]으로 나르 미니폼 Q [[PROJECTILE]] / 메가폼 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, 미니폼 Q의 추가 [[PIERCE]], 메가폼 Q의 추가 [[AOE]]피해는 막을 수 없음."],
      en: ["P [[STUN]] cannot interrupt Gnar's Mini Form E or Mega Form E [[DASH]]. \n However, the [[STUN]] still applies.", "R(Tibbers) [[SUMMON]] can block Gnar's Mini Form Q [[PROJECTILE]] or Mega Form Q [[SINGLE]] [[PROJECTILE]]. \n However, Mini Form Q's additional [[PIERCE]] and Mega Form Q's additional [[AOE]] damage cannot be blocked."],
    },
    gnar: {
      ko: [],
      en: [],
    },
  },
};
