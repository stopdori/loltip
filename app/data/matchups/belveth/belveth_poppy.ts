// app/data/matchups/belveth/belveth_poppy.ts
import type { MatchupSummary } from "../_types";

export const belveth_poppy: MatchupSummary = {
  champs: ["belveth", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 뽀삐 E의 [[DASH]], R의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 뽀삐 E의 [[KNOCKBACK]], [[STUN]] / R의 [[AIRBORNE]]으로 끊기지 않음. \n 단, [[AIRBORNE]], [[KNOCKBACK]], [[STUN]]은 남아있음."],
      en: [],
    },
    poppy: {
      ko: ["뽀삐 W의 [[ANTI_DASH]]로 벨베스 R의 [[MOBILITY]]를 막을 수 없음.", "뽀삐 W의 [[ANTI_DASH]]로 벨베스 Q의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음.\n 단, [[GROUNDED]]에 걸렸을 때, 벨베스의 R도 [[MOBILITY]]여서 사용 할 수 없음."],
      en: [],
    },
  },
};
