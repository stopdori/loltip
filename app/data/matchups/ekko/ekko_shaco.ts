// app/data/matchups/ekko/ekko_shaco.ts
import type { MatchupSummary } from "../_types";

export const ekko_shaco: MatchupSummary = {
  champs: ["ekko", "shaco"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 샤코 Q의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 샤코 W, R의 [[FEAR]]를 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[FEAR]]는 남아있음."],
      en: [""],
    },
    shaco: {
      ko: [],
      en: [],
    },
  },
};
