// app/data/matchups/hecarim/hecarim_twistedfate.ts
import type { MatchupSummary } from "../_types";

export const hecarim_twistedfate: MatchupSummary = {
  champs: ["hecarim", "twistedfate"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 트위스티드 페이트 R2의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 트위스티드 페이트 W의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Twisted Fate's R2 [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Twisted Fate's W [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    twistedfate: {
      ko: [],
      en: [],
    },
  },
};
