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
      ko: ["암베사 R의 [[SUPPRESS]]으로 요네 Q3, E(처음시전)를 끊을 수 있음", "암베사 R의 [[SUPPRESS]]으로 요네 E(돌아가는), R(시전 집중, 이동)을 끊을 수 없음\n단, 요네 R은 암베사 R로 이동해서 몸으로 이동을 막을 수는 있음.", "암베사 R의 [[UNSTOPPABLE]]로 요네 Q3, R의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Yone's Q3 and E (initial cast).", "Ambessa's R [[SUPPRESS]] cannot interrupt Yone's E (returning) or R (channeling, dash).\nHowever, Ambessa can use her R to move and physically block Yone's R movement.", "Ambessa's R [[UNSTOPPABLE]] can ignore Yone's Q3 and R [[AIRBORNE]]."],
    },
    yone: {
      ko: [],
      en: [],
    },
  },
};
