// app/data/matchups/caitlyn/caitlyn_yuumi.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_yuumi: MatchupSummary = {
  champs: ["caitlyn", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 유미 R의 [[SKILL_CHANNEL]]을 끊을 수 없음.",
        "활성화된 W([[TRAP]])의 [[ROOT]]으로 유미 W의 [[DASH]]을 끊을 수 있음. \n 단, 유미 W는 [[COOLDOWN]] 상태가 됨."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Yuumi's R [[SKILL_CHANNEL]].",
        "Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Yuumi's W [[DASH]]. \n However, Yuumi's W goes on [[COOLDOWN]]."],
    },
    yuumi: {
      ko: [],
      en: [],
    },
  },
};
