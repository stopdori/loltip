// app/data/matchups/ekko/ekko_pyke.ts
import type { MatchupSummary } from "../_types";

export const ekko_pyke: MatchupSummary = {
  champs: ["ekko", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 파이크 E의 [[DASH]], R의 [[BLINK]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 파이크 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "W의 [[STUN]]로 파이크 Q의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 파이크 Q의 [[GRAB]], E의 [[STUN]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[GRAB]], [[STUN]]은 남아있음."],
      en: [""],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
