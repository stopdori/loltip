// app/data/matchups/ekko/ekko_gragas.ts
import type { MatchupSummary } from "../_types";

export const ekko_gragas: MatchupSummary = {
  champs: ["ekko", "gragas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 그라가스 E의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 그라가스 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 그라가스 E, R의 [[KNOCKBACK]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[KNOCKBACK]]([[AIRBORNE]])은 남아있음."],
      en: [""],
    },
    gragas: {
      ko: [],
      en: [],
    },
  },
};
