// app/data/matchups/akali/akali_gwen.ts
import type { MatchupSummary } from "../_types";

export const akali_gwen: MatchupSummary = {
  champs: ["akali", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["아칼리 E2의 [[HOMING]] [[DASH]]으로 그웬 E의 [[DASH]]을 따라 갈 수 있음.", "아칼리 E2를 그웬 W(그면상)의 [[UNTARGETABLE]]에 사용할 수 없음."],
      en: ["Akali's E2 [[HOMING]] [[DASH]] can follow Gwen's E [[DASH]].", "Akali's E2 cannot be used while Gwen's W (mist) [[UNTARGETABLE]] is active."],
    },
    gwen: {
      ko: [],
      en: [],
    },
  },
};
