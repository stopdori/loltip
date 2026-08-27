// app/data/matchups/ashe/ashe_vladimir.ts
import type { MatchupSummary } from "../_types";

export const ashe_vladimir: MatchupSummary = {
  champs: ["ashe", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["R의 [[STUN]]로 블라디 E의 [[SKILL_CHARGED]]을 끊을 수 있음. \n 단, 끊길 때 모았던 만큼의 [[SKILL_CHARGED]]은 발사."],
      en: ["R [[STUN]] can interrupt Vladimir's E [[SKILL_CHARGED]]. \n However, Vladimir's E is not cancelled — it fires up to the charged amount."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
