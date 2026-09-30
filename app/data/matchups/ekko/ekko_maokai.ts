// app/data/matchups/ekko/ekko_maokai.ts
import type { MatchupSummary } from "../_types";

export const ekko_maokai: MatchupSummary = {
  champs: ["ekko", "maokai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 마오카이 W의 [[UNTARGETABLE]] [[DASH]]을 따라갈 수 없음. [[NOT_EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 마오카이 Q의 [[KNOCKBACK]] / W, R의 [[ROOT]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[ROOT]], [[AIRBORNE]]([[KNOCKBACK]])은 남아있음."],
      en: [""],
    },
    maokai: {
      ko: [],
      en: [],
    },
  },
};
