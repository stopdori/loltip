// app/data/matchups/drmundo/drmundo_urgot.ts
import type { MatchupSummary } from "../_types";

export const drmundo_urgot: MatchupSummary = {
  champs: ["drmundo", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 우르곳 E의 [[GRAB]], R2의 [[SUPPRESS]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]].",
        "[[TIP]]문도 박사 P의 [[CC_IMMUNE]] 효과를 E의 [[GRAB]]으로 빼고 R2를 사용해야 [[EXECUTE]] 발동."],
      en: ["P's [[CC_IMMUNE]] effect can ignore Urgot's E [[GRAB]] and R2 [[SUPPRESS]] once.\nAt this time, P also [[DROP]]s a canister.",
        "[[TIP]] [[EXECUTE]] only triggers if Dr. Mundo's P [[CC_IMMUNE]] effect is used up by E's [[GRAB]] before R2 is used."],
    },
    urgot: {
      ko: [],
      en: [],
    },
  },
};
