// app/data/matchups/caitlyn/caitlyn_viego.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_viego: MatchupSummary = {
  champs: ["caitlyn", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 비에고 W의 [[SKILL_CHARGED]]을 끊을 수 있음.",
      "활성화된 W([[TRAP]])의 [[ROOT]]으로 비에고 W의 [[DASH]] R의 [[BLINK]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음.",
        "활성화된 W([[TRAP]])의 [[TRUE_SIGHT]]로 비에고 E의 [[CAMOUFLAGE]] 상태를 볼 수 있음.",
      "R의 [[TRUE_SIGHT]]로 비에고 E의 [[CAMOUFLAGE]] 상태를 볼 수 있음. \n R의 [[PROJECTILE]]가 적중하면 종료."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Viego's W [[SKILL_CHARGED]].",
        "Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Viego's W [[DASH]] and R [[BLINK]]. \n However, the [[ROOT]] and headshot still apply.",
        "Caitlyn's activated W's ([[TRAP]]) [[TRUE_SIGHT]] can see Viego under E [[CAMOUFLAGE]].",
        "Caitlyn's R [[TRUE_SIGHT]] can see Viego under E [[CAMOUFLAGE]]. \n This ends once R's [[PROJECTILE]] hits."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
