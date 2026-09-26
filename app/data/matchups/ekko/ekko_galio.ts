// app/data/matchups/ekko/ekko_galio.ts
import type { MatchupSummary } from "../_types";

export const ekko_galio: MatchupSummary = {
  champs: ["ekko", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 갈리오 E의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 갈리오 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "W의 [[STUN]]로 갈리오 W의 [[SKILL_CHARGED]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]] \n 단, W의 [[TAUNT]]은 해제될 때 발동.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 갈리오 W의 [[TAUNT]] / E, R의 [[AIRBORNE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[TAUNT]], [[AIRBORNE]]은 남아있음."],
      en: [""],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
