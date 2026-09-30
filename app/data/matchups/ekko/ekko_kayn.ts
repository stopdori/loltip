// app/data/matchups/ekko/ekko_kayn.ts
import type { MatchupSummary } from "../_types";

export const ekko_kayn: MatchupSummary = {
  champs: ["ekko", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 케인 / 그암 / 다르킨 Q의 [[DASH]], E(일반 벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 케인 / 그암 / 다르킨 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "W의 [[STUN]]로 케인 / 그암 / 다르킨 E(일반, 벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 다르킨 W의 [[AIRBORNE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[AIRBORNE]]은 남아있음."],
      en: [""],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
