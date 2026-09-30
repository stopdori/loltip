// app/data/matchups/ekko/ekko_samira.ts
import type { MatchupSummary } from "../_types";

export const ekko_samira: MatchupSummary = {
  champs: ["ekko", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 사미라 E의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 사미라 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "W의 [[STUN]]로 사미라 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: [""],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
