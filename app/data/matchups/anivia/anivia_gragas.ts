// app/data/matchups/anivia/anivia_gragas.ts
import type { MatchupSummary } from "../_types";

export const anivia_gragas: MatchupSummary = {
  champs: ["anivia", "gragas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 그라가스 E(배치기)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 그라가스 E(배치기)의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Gragas's E (body slam) [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Gragas's E (body slam) [[DASH]]."],
    },
    gragas: {
      ko: [],
      en: [],
    },
  },
};
