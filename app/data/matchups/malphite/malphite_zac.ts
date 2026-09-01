// app/data/matchups/malphite/malphite_zac.ts
import type { MatchupSummary } from "../_types";

export const malphite_zac: MatchupSummary = {
  champs: ["malphite", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 자크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 Q의 [[TETHER]]은 말파이트가 범위 안에 있다면 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Zac's Q [[GRAB]], E [[AIRBORNE]], and R [[KNOCKBACK]]. \n However, after [[UNSTOPPABLE]] ends, Q's [[TETHER]] remains if Malphite is still within range."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
