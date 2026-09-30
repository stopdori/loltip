// app/data/matchups/ekko/ekko_rell.ts
import type { MatchupSummary } from "../_types";

export const ekko_rell: MatchupSummary = {
  champs: ["ekko", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 렐 승마폼 W / 낙마폼 W [[EMPOWERED]] [[BA]]의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 렐 승마폼 W / 낙마폼 W [[EMPOWERED]] [[BA]]의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.",  
        "E(경직 단계)의 [[CC_BUFFER]]로 렐 Q의 [[STUN]], R의 [[GRAB]] / 승마폼 W의 [[AIRBORNE]] / 낙마폼 W [[EMPOWERED]] [[BA]]의 [[GRAB]]을 \n 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[STUN]], [[AIRBORNE]]은 남아있음."],
      en: [""],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
