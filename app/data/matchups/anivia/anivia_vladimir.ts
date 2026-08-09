// app/data/matchups/anivia/anivia_vladimir.ts
import type { MatchupSummary } from "../_types";

export const anivia_vladimir: MatchupSummary = {
  champs: ["anivia", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 블라디미르 E의 [[SKILL_CHARGED]]을 끊을 수 있음. \n 단, 블라디 E는 취소되지 않고 충전 분량까지 발사."],
      en: ["Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Vladimir's E [[SKILL_CHARGED]]. \n However, Vladimir's E is not cancelled — it fires up to the charged amount."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
