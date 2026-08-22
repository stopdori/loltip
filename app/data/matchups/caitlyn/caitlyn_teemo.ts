// app/data/matchups/caitlyn/caitlyn_teemo.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_teemo: MatchupSummary = {
  champs: ["caitlyn", "teemo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[TRUE_SIGHT]]로 티모 P의 [[INVISIBILITY]] 상태를 볼 수 있음.",
      "R의 [[TRUE_SIGHT]]로 티모 P의 [[INVISIBILITY]] 상태를 볼 수 있음. \n R의 [[PROJECTILE]]가 적중하면 종료."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[TRUE_SIGHT]] can see Teemo under P [[INVISIBILITY]].",
        "Caitlyn's R [[TRUE_SIGHT]] can see Teemo under P [[INVISIBILITY]]. \n This ends once R's [[PROJECTILE]] hits."],
    },
    teemo: {
      ko: [],
      en: [],
    },
  },
};
