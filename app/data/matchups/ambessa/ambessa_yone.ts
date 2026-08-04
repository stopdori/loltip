// app/data/matchups/ambessa/ambessa_yone.ts
import type { MatchupSummary } from "../_types";

export const ambessa_yone: MatchupSummary = {
  champs: ["ambessa", "yone"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 요네 Q3, E의 [[DASH]]을 끊을 수 있음. \n 단 요네 E(복귀단계)의 [[DASH]]은 끊을 수 없음.", 
        "R의 [[UNSTOPPABLE]]로 요네 Q3, R의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["R [[SUPPRESS]] can interrupt Yone's Q3 and E [[DASH]]. \n However, Yone's E (return phase) [[DASH]] cannot be interrupted.", "R [[UNSTOPPABLE]] can ignore Yone's Q3 and R [[AIRBORNE]]."],
    },
    yone: {
      ko: [],
      en: [],
    },
  },
};
