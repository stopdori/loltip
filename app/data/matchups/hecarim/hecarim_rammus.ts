// app/data/matchups/hecarim/hecarim_rammus.ts
import type { MatchupSummary } from "../_types";

export const hecarim_rammus: MatchupSummary = {
  champs: ["hecarim", "rammus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 람머스 Q의 [[TRANSFORM]]을 해제시킬 수 있음.",
        "R의 [[UNSTOPPABLE]]로 람머스 Q의 [[KNOCKBACK]], E의 [[TAUNT]], QR의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[TAUNT]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can cancel Rammus's Q [[TRANSFORM]].",
        "R [[UNSTOPPABLE]] can ignore Rammus's Q [[KNOCKBACK]], E [[TAUNT]], and QR [[AIRBORNE]]. \n However, [[TAUNT]] remains after [[UNSTOPPABLE]] ends."],
    },
    rammus: {
      ko: [],
      en: [],
    },
  },
};
