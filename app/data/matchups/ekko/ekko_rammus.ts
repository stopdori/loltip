// app/data/matchups/ekko/ekko_rammus.ts
import type { MatchupSummary } from "../_types";

export const ekko_rammus: MatchupSummary = {
  champs: ["ekko", "rammus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 람머스 R의 [[DASH]]을 따라갈 수 있음. [[EXIST]] \n 단, 에코가 끝까지 따라가지 않고 충돌하면 정지.", 
        "W의 [[STUN]]로 람머스 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 람머스 Q의 [[KNOCKBACK]], E의 [[TAUNT]], R의 [[AIRBORNE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[KNOCKBACK]]([[AIRBORNE]]), [[TAUNT]], [[AIRBORNE]]은 남아있음."],
      en: [""],
    },
    rammus: {
      ko: [],
      en: [],
    },
  },
};
