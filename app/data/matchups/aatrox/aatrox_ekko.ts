// app/data/matchups/aatrox/aatrox_ekko.ts
import type { MatchupSummary } from "../_types";

export const aatrox_ekko: MatchupSummary = {
  champs: ["aatrox", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 에코 E의 구르기([[DASH]])을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Ekko's E roll [[DASH]]."],
    },
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 아트록스 E의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 아트록스 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 Q, W([[GRAB]])의 [[AIRBORNE]]은 남아있음."],
      en: [],
    },
  },
};
