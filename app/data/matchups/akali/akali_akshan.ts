// app/data/matchups/akali/akali_akshan.ts
import type { MatchupSummary } from "../_types";

export const akali_akshan: MatchupSummary = {
  champs: ["akali", "akshan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 아크샨 E의 [[DASH]]을 따라 갈 수 있음. \n 단, 판정에 따라 갈고리에서 떨어뜨릴 수도 있음.",
        "E1의 [[TRUE_SIGHT]]로 아크샨 W의 [[CAMOUFLAGE]]을 볼 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Akshan's E [[DASH]]. \n However, it may knock Akshan off the hook depending on timing.", "E1 can reveal Akshan's W [[CAMOUFLAGE]]. \n However, using E2 to collide will hide Akshan again."],
    },
    akshan: {
      ko: ["아크샨 R의 [[TRUE_SIGHT]]로 아칼리 W(장막)의 [[INVISIBILITY]]을 볼 수 있음."],
      en: ["Akshan's R [[TRUE_SIGHT]] can reveal Akali's W (shroud) [[INVISIBILITY]]."],
    },
  },
};
