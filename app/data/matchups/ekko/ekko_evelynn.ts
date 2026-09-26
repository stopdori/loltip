// app/data/matchups/ekko/ekko_evelynn.ts
import type { MatchupSummary } from "../_types";

export const ekko_evelynn: MatchupSummary = {
  champs: ["ekko", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 이블린 W의 [[CHARM]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[CHARM]]은 남아있음."],
      en: [""],
    },
    evelynn: {
      ko: ["W의 [[CHARM]]으로 에코 E(구르기)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Ekko's E (roll) [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
