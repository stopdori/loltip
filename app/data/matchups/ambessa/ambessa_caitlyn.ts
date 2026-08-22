// app/data/matchups/ambessa/ambessa_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const ambessa_caitlyn: MatchupSummary = {
  champs: ["ambessa", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 케틀 E(투망)의 [[DASH]], R의 [[SKILL_CHANNEL]]를 끊을 수 있음."],
      en: ["R [[SUPPRESS]] can interrupt Caitlyn's E (net) [[DASH]] and R [[SKILL_CHANNEL]]."],
    },
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 암베사 P의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음.",
        "[[TIP]]암베사를 바라본 방향 기준 \n 케이틀린 뒤쪽에 활성화된 W([[TRAP]])을 설치 해두면 암베사 R을 적중당했을 때 밟음. \n 생각보다 훨씬 더 뒤에 설치해야 함. [[CLIP:https://www.youtube.com/shorts/9lnPTJ7Bn38]]"
      ],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Ambessa's P [[DASH]]. \n However, the [[ROOT]] and headshot still apply.",
        "[[TIP]] Based on the direction facing Ambessa, \n if you place an activated W ([[TRAP]]) behind Caitlyn, she steps on it when hit by Ambessa's R. \n It needs to be placed much further back than you'd expect. [[CLIP:https://www.youtube.com/shorts/9lnPTJ7Bn38]]"
      ],
    },
  },
};
