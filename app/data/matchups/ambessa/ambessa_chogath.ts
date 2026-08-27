// app/data/matchups/ambessa/ambessa_chogath.ts
import type { MatchupSummary } from "../_types";

export const ambessa_chogath: MatchupSummary = {
  champs: ["ambessa", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[UNSTOPPABLE]]로 초가스 Q의 [[AIRBORNE]], W의 [[SILENCE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[SILENCE]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Cho'Gath's Q [[AIRBORNE]] and W [[SILENCE]]. \n However, the [[SILENCE]] still applies after [[UNSTOPPABLE]] ends."],
    },
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 암베사 P의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 암베사 P의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Ambessa's P [[DASH]].",
        "W [[SILENCE]] cannot interrupt Ambessa's P [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
