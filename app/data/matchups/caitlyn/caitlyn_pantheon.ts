// app/data/matchups/caitlyn/caitlyn_pantheon.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_pantheon: MatchupSummary = {
  champs: ["caitlyn", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
      "W([[TRAP]])의 [[ROOT]]으로 판테온 W의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Pantheon's R [[SKILL_CHANNEL]].",
        "Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Pantheon's W [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["[[TIP]]케이틀린이 판테온과 다른 팀일 때 \n 판테온 R의 도착지점을 관측하자마자 중앙에 케이틀린 W([[TRAP]])를 설치하면 \n 판테온이 도착하기 전에 활성화되어 피할 수 없음. [[CLIP:https://youtube.com/shorts/4NnnGW_u-hg?feature=share]]"],
    en: ["[[TIP]] When Caitlyn is on the enemy team against Pantheon, \n if you place Caitlyn's W ([[TRAP]]) at the center of Pantheon's R landing zone as soon as it's spotted, \n it activates before Pantheon lands, so he can't avoid it. [[CLIP:https://youtube.com/shorts/4NnnGW_u-hg?feature=share]]"],
  },
};
