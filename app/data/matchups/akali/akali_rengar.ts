// app/data/matchups/akali/akali_rengar.ts
import type { MatchupSummary } from "../_types";

export const akali_rengar: MatchupSummary = {
  champs: ["akali", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 렝가 P, R의 [[DASH]]을 따라갈 수 있음.", 
        "E1의 [[TRUE_SIGHT]]로 렝가 R의 [[CAMOUFLAGE]]를 볼 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Rengar's P and R [[DASH]].", "E1 [[TRUE_SIGHT]] can reveal Rengar's R [[CAMOUFLAGE]]."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
