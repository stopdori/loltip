// app/data/matchups/ekko/ekko_ezreal.ts
import type { MatchupSummary } from "../_types";

export const ekko_ezreal: MatchupSummary = {
  champs: ["ekko", "ezreal"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 이즈리얼 E의 [[BLINK]]을 따라갈 수 있음. [[EXIST]]"],
      en: [""],
    },
    ezreal: {
      ko: ["E(비전 이동)의 [[CC_BUFFER]]로 에코 W의 [[STUN]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
