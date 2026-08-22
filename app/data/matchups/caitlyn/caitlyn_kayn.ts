// app/data/matchups/caitlyn/caitlyn_kayn.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_kayn: MatchupSummary = {
  champs: ["caitlyn", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 케인, 그암, 다르킨 W의 [[SKILL_CHANNEL]] [[DASH]] 을 끊을 수 있음.",
      "W([[TRAP]])의 [[ROOT]]으로 케인, 그암, 다르킨 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt the W [[SKILL_CHANNEL]] [[DASH]] of Kayn's Base, Shadow, and Rhaast forms.",
        "Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt the Q [[DASH]] of Kayn's Base, Shadow, and Rhaast forms. \n However, the [[ROOT]] and headshot still apply."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
