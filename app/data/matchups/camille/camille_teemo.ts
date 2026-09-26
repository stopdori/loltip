// app/data/matchups/camille/camille_teemo.ts
import type { MatchupSummary } from "../_types";

export const camille_teemo: MatchupSummary = {
  champs: ["camille", "teemo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["R의 [[UNTARGETABLE]]로 티모 평타, Q의 [[PROJECTILE]] / R(발동, 폭발)을 피할 수 있음. \n 단, 이미 적중한 E, R의 [[DOT]] 피해는 피할 수 없음."],
      en: ["R [[UNTARGETABLE]] can dodge Teemo's auto-attacks and Q [[PROJECTILE]] / R (activation, explosion damage). \n However, [[DOT]] damage from E and R that has already hit cannot be dodged."],
    },
    teemo: {
      ko: [],
      en: [],
    },
  },
};
