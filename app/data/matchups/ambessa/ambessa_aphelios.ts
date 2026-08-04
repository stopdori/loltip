// app/data/matchups/ambessa/ambessa_aphelios.ts
import type { MatchupSummary } from "../_types";

export const ambessa_aphelios: MatchupSummary = {
  champs: ["ambessa", "aphelios"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 아펠리오스 빨강(절단) Q를 멈출 수 있음. \n 단, [[SUPPRESS]]이 끝나고 아펠리오스 Q가 잠깐 유지됨.", 
        "R의 [[UNSTOPPABLE]]로 아펠리오스 중력포(보라) Q의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Aphelios's red (Severum) Q. \n However, Aphelios's Q briefly persists after [[SUPPRESS]] ends.", "R [[UNSTOPPABLE]] can ignore Aphelios's gravity cannon (purple) Q [[ROOT]]. \n However, the [[ROOT]] still applies after [[UNSTOPPABLE]] ends."],
    },
    aphelios: {
      ko: [],
      en: [],
    },
  },
};
