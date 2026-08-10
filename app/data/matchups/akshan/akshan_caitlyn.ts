// app/data/matchups/akshan/akshan_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const akshan_caitlyn: MatchupSummary = {
  champs: ["akshan", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akshan: {
      ko: [""],
      en: [""],
    },
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])를 아크샨 W의 [[CAMOUFLAGE]] 상태에서 밟으면 위치가 드러남.",
      "활성화된 W([[TRAP]])가 아크샨 E의 [[DASH]] 경로에 있다면 [[ROOT]]으로 [[DASH]]을 끊을 수 있음.",
      "R의 [[TRUE_SIGHT]]로 인해 아크샨이 조준당하고 W의 [[CAMOUFLAGE]] 상태가 되어도 위치가 드러남."],
      en: ["Stepping on Caitlyn's activated W ([[TRAP]]) while under Akshan's W [[CAMOUFLAGE]] reveals his position.",
        "If Caitlyn's activated W ([[TRAP]]) is in the path of Akshan's E [[DASH]], the [[ROOT]] can interrupt the [[DASH]].",
        "Even if Akshan is targeted by Caitlyn's R [[TRUE_SIGHT]] and enters W [[CAMOUFLAGE]], his position is still revealed."],
    },
  },
  common: {
    ko: [],
    en: [],
  },
};
