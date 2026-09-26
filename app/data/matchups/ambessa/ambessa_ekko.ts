// app/data/matchups/ambessa/ambessa_ekko.ts
import type { MatchupSummary } from "../_types";

export const ambessa_ekko: MatchupSummary = {
  champs: ["ambessa", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 에코 E(구르기)의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 에코 W의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Ekko's E (roll) [[DASH]].", "R [[UNSTOPPABLE]] can ignore Ekko's W [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 암베사 P의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 암베사 P의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 암베사 R의 [[SUPPRESS]]을 무시할 수 없음. [[NOT_EXIST]] \n 즉, [[SUPPRESS]] 당하는 즉시 그자리 위치 고정."],
      en: [],
    },
  },
};
