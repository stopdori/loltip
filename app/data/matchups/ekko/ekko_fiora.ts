// app/data/matchups/ekko/ekko_fiora.ts
import type { MatchupSummary } from "../_types";

export const ekko_fiora: MatchupSummary = {
  champs: ["ekko", "fiora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 피오라 Q의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 피오라 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 피오라 W(응수)의 [[STUN]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[STUN]]은 남아있음."],
      en: [""],
    },
    fiora: {
      ko: ["W([[RIPOSTE]])의 [[STUN]]로 에코 W의 [[STUN]]을 무시할 수 있음. [[EXIST]] \n 단, 에코 W의 [[DOT]] [[SLOW]]는 남아있음. \n 단, QW([[RIPOSTE]])로 에코 W의 [[STUN]]을 무시하고 [[RIPOSTE]]의 [[CC_IMMUNE]]이 종료되기 전에 에코 W의 [[ZONE]]에서 벗어나면 [[SLOW]]가 걸리지 않음. [[CLIP:https://www.youtube.com/shorts/TYLUEGuWZ20]]"],
      en: [],
    },
  },
};
