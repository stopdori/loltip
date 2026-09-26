// app/data/matchups/azir/azir_ekko.ts
import type { MatchupSummary } from "../_types";

export const azir_ekko: MatchupSummary = {
  champs: ["azir", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 에코 E(구르기)의 [[DASH]]을 끊을 수 있음."],
      en: [],
    },
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 아지르 E의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 아지르 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 아지르 R의 [[KNOCKBACK]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[KNOCKBACK]]([[AIRBORNE]])은 남아있음."],
      en: [],
    },
  },
};
