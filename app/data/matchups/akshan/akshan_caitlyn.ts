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
      ko: [],
      en: [],
    },
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 아크샨 R의 [[SKILL_CHANNEL]]을 끊을 수 없음.",
      "활성화된 W([[TRAP]])의 [[ROOT]]으로 아크샨 E의 [[SKILL_CHANNEL]] [[DASH]] 을 끊을 수 있음.",
      "활성화된 W([[TRAP]])의 [[TRUE_SIGHT]]로 아크샨 W의 [[CAMOUFLAGE]] 상태를 볼 수 있음.",
      "R의 [[TRUE_SIGHT]]로 아크샨 W의 [[CAMOUFLAGE]] 상태를 볼 수 있음. \n R의 [[PROJECTILE]]가 적중하면 종료."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Akshan's R [[SKILL_CHANNEL]].",
        "Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Akshan's E [[SKILL_CHANNEL]] [[DASH]].",
        "Caitlyn's activated W's ([[TRAP]]) [[TRUE_SIGHT]] can see Akshan under W [[CAMOUFLAGE]].",
        "Caitlyn's R [[TRUE_SIGHT]] can see Akshan under W [[CAMOUFLAGE]]. \n This ends once R's [[PROJECTILE]] hits."],
    },
  },
};
