// app/data/matchups/ekko/ekko_malphite.ts
import type { MatchupSummary } from "../_types";

export const ekko_malphite: MatchupSummary = {
  champs: ["ekko", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 말파이트 R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 말파이트 R의 [[AIRBORNE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[AIRBORNE]]은 남아있음."],
      en: [""],
    },
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 에코 W의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Ekko's W [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
