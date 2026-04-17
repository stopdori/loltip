// app/data/matchups/anivia/anivia_sion.ts
import type { MatchupSummary } from "../_types";

export const anivia_sion: MatchupSummary = {
  champs: ["anivia", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 사이온 Q의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "애니비아 W([[TERRAIN]])로 사이온 R의 이동경로를 막아서 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Sion's Q [[SKILL_CHANNEL]].", "Anivia's W [[TERRAIN]] can block Sion's R path and interrupt it."],
    },
    sion: {
      ko: [],
      en: [],
    },
  },
};
