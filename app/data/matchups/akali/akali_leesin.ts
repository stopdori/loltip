// app/data/matchups/akali/akali_leesin.ts
import type { MatchupSummary } from "../_types";

export const akali_leesin: MatchupSummary = {
  champs: ["akali", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 리신 Q2, W(방호)의 [[DASH]]를 따라갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Lee Sin's Q2 and W (ward hop) [[DASH]]."],
    },
    leesin: {
      ko: ["리신 E가 아칼리에 적중하고 W의 [[INVISIBILITY]] 효과가 발동하면 보임.\n반면, 아칼리의 [[INVISIBILITY]] 효과가 발동하고 리신이 E를 맞히면 보이지 않음"],
      en: ["If Lee Sin's E hits Akali and Akali's W [[INVISIBILITY]] activates, Akali becomes visible.\nConversely, if Akali's [[INVISIBILITY]] activates first and Lee Sin's E hits, Akali remains invisible."],
    },
  },
};
