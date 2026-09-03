// app/data/matchups/hecarim/hecarim_zac.ts
import type { MatchupSummary } from "../_types";

export const hecarim_zac: MatchupSummary = {
  champs: ["hecarim", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 자크 E의 [[SKILL_CHANNEL]], [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 자크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 Q의 [[TETHER]]은 헤카림이 범위 안에 있다면 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Zac's E [[SKILL_CHANNEL]] [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Zac's Q [[GRAB]], E [[AIRBORNE]], and R [[KNOCKBACK]]. \n However, after [[UNSTOPPABLE]] ends, Q's [[TETHER]] remains if Hecarim is still within range."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
