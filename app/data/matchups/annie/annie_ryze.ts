// app/data/matchups/annie/annie_ryze.ts
import type { MatchupSummary } from "../_types";

export const annie_ryze: MatchupSummary = {
  champs: ["annie", "ryze"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 라이즈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "애니 R(티버)의 [[SUMMON]]으로 라이즈 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, EQ의 추가 [[CHAIN]]피해는 막을 수 없음."],
      en: ["Annie's P [[STUN]] can interrupt Ryze's R [[SKILL_CHANNEL]].", "Annie's R(Tibbers) [[SUMMON]] can block Ryze's Q [[SINGLE]] [[PROJECTILE]]. \n However, EQ's additional [[CHAIN]] damage cannot be blocked."],
    },
    ryze: {
      ko: [],
      en: [],
    },
  },
};
