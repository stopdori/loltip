// app/data/matchups/caitlyn/caitlyn_senna.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_senna: MatchupSummary = {
  champs: ["caitlyn", "senna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[TRUE_SIGHT]]로 세나 W(안개)의 [[CAMOUFLAGE]] 상태를 볼 수 있음.",
      "R의 [[TRUE_SIGHT]]로 세나 W(장막)의 [[CAMOUFLAGE]] 상태를 볼 수 있음. \n R의 [[PROJECTILE]]가 적중하면 종료."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[TRUE_SIGHT]] can see Senna under W (Mist) [[CAMOUFLAGE]].",
        "Caitlyn's R [[TRUE_SIGHT]] can see Senna under W (Mist) [[CAMOUFLAGE]]. \n This ends once R's [[PROJECTILE]] hits."],
    },
    senna: {
      ko: [],
      en: [],
    },
  },
};
