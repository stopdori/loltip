// app/data/matchups/ambessa/ambessa_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const ambessa_caitlyn: MatchupSummary = {
  champs: ["ambessa", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 케틀 E(투망)의 [[DASH]], R의 [[SKILL_CHANNEL]]를 끊을 수 있음."],
      en: ["R [[SUPPRESS]] can interrupt Caitlyn's E (net) [[DASH]] and R [[SKILL_CHANNEL]]."],
    },
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])가 암베사 P의 [[DASH]] 경로에 있다면 [[ROOT]]에 걸리지만 무시하고 [[DASH]]. \n 단, [[ROOT]]와 헤드샷은 남아있음."],
      en: ["If Caitlyn's activated W ([[TRAP]]) is in the path of Ambessa's P [[DASH]], she gets [[ROOT]]ed but can ignore it and [[DASH]] anyway. \n However, the [[ROOT]] and headshot still apply."],
    },
  },
};
