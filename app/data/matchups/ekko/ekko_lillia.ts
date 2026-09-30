// app/data/matchups/ekko/ekko_lillia.ts
import type { MatchupSummary } from "../_types";

export const ekko_lillia: MatchupSummary = {
  champs: ["ekko", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 릴리아 W의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 릴리아 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 릴리아 R의 [[SLEEP]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[SLEEP]]은 남아있음."],
      en: [""],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
