// app/data/matchups/diana/diana_ekko.ts
import type { MatchupSummary } from "../_types";

export const diana_ekko: MatchupSummary = {
  champs: ["diana", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    diana: {
      ko: ["R의 [[GRAB]]으로 에코 E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Ekko's E [[DASH]]."],
    },
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 다이애나 E의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 다이애나 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 다이애나 R의 [[GRAB]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[GRAB]]([[AIRBORNE]])은 남아있음."],
      en: [],
    },
  },
};
