// app/data/matchups/ekko/ekko_poppy.ts
import type { MatchupSummary } from "../_types";

export const ekko_poppy: MatchupSummary = {
  champs: ["ekko", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 뽀삐 E의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 뽀삐 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "W의 [[STUN]]로 뽀삐 R의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 뽀삐 E의 [[KNOCKBACK]], [[STUN]] / R(짧은)의 [[AIRBORNE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[STUN]], [[AIRBORNE]]은 남아있음.", 
      "E(경직 단계)의 [[CC_BUFFER]]로 뽀삐 R(긴)의 [[KNOCKBACK]]을 무시할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    poppy: {
      ko: [],
      en: [],
    },
  },
};
