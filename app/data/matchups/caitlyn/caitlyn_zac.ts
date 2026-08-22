// app/data/matchups/caitlyn/caitlyn_zac.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_zac: MatchupSummary = {
  champs: ["caitlyn", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 자크 E의 [[SKILL_CHARGED]]을 끊을 수 있음.",
        "활성화된 W([[TRAP]])의 [[ROOT]]으로 자크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Zac's E [[SKILL_CHARGED]].",
        "Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Zac's E [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["[[TIP]]적군 자크가 P의 [[REVIVE]] [[STASIS]] 효과를 받을 때 \n 세포가 모이는 중심에 케이틀린 W([[TRAP]])를 미리 설치하여 활성화시켜 놓으면. \n [[STASIS]] 효과가 풀릴 때 W([[TRAP]])가 즉시 발동."],
    en: ["[[TIP]] When enemy Zac gets the P [[REVIVE]] [[STASIS]] effect, \n if you pre-place and activate Caitlyn's W ([[TRAP]]) at the center where his cells gather, \n the W ([[TRAP]]) triggers immediately once the [[STASIS]] ends."],
  },
};
