// app/data/matchups/anivia/anivia_malphite.ts
import type { MatchupSummary } from "../_types";

export const anivia_malphite: MatchupSummary = {
  champs: ["anivia", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: [],
      en: [],
    },
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Anivia's Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
