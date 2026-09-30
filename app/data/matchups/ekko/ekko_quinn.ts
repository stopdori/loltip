// app/data/matchups/ekko/ekko_quinn.ts
import type { MatchupSummary } from "../_types";

export const ekko_quinn: MatchupSummary = {
  champs: ["ekko", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 퀸 E의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 퀸 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "W의 [[STUN]]로 R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 퀸 E의 [[KNOCKBACK]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[AIRBORNE]]([[KNOCKBACK]])은 남아있음."],
      en: [""],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
