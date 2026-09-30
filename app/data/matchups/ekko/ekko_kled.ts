// app/data/matchups/ekko/ekko_kled.ts
import type { MatchupSummary } from "../_types";

export const ekko_kled: MatchupSummary = {
  champs: ["ekko", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 클레드 승마폼 E / 낙마폼 Q / R의 [[DASH]]을 따라갈 수 있음. [[EXIST]] \n 단, 클레드 R은 에코가 끝까지 따라가지 않고 충돌하면 정지.", 
        "W의 [[STUN]]로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 클레드 승마폼 Q의 [[GRAB]] / R의 [[KNOCKBACK]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[KNOCKBACK]]([[AIRBORNE]])은 남아있음."],
      en: [""],
    },
    kled: {
      ko: [],
      en: [],
    },
  },
};
