// app/data/matchups/caitlyn/caitlyn_lissandra.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_lissandra: MatchupSummary = {
  champs: ["caitlyn", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: [],
      en: [],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 케이틀린 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 케이틀린 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "케이틀린 W의 [[ROOT]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
  common: {
    ko: ["[[TIP]]적군 리산드라가 자신에게 R을 사용하여 [[STASIS]] 효과를 받을 때 \n 발밑에 케이틀린 W([[TRAP]])를 미리 설치하여 활성화시켜 놓으면. \n [[STASIS]] 효과가 풀릴 때 W([[TRAP]])가 즉시 발동."],
    en: ["[[TIP]] When enemy Lissandra uses R on herself to gain [[STASIS]], \n if you pre-place and activate Caitlyn's W ([[TRAP]]) under her feet, \n the W ([[TRAP]]) triggers immediately once the [[STASIS]] ends."],
  },
};
