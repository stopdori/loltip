// app/data/matchups/ambessa/ambessa_nautilus.ts
import type { MatchupSummary } from "../_types";

export const ambessa_nautilus: MatchupSummary = {
  champs: ["ambessa", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 노틸러스 Q의 [[DASH]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 노틸러스 P의 [[ROOT]], Q의 [[GRAB]], R의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Nautilus's Q [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Nautilus's P [[ROOT]], Q [[GRAB]], and R [[AIRBORNE]]. \n However, the [[ROOT]] still applies after [[UNSTOPPABLE]] ends."],
    },
    nautilus: {
      ko: [],
      en: [],
    },
  },
};
