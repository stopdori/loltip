// app/data/matchups/ekko/ekko_pantheon.ts
import type { MatchupSummary } from "../_types";

export const ekko_pantheon: MatchupSummary = {
  champs: ["ekko", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 판테온 W의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 판테온 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "W의 [[STUN]]로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 판테온 W의 [[STUN]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[STUN]]은 남아있음."],
      en: [""],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
