// app/data/matchups/hecarim/hecarim_lissandra.ts
import type { MatchupSummary } from "../_types";

export const hecarim_lissandra: MatchupSummary = {
  champs: ["hecarim", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["R의 [[UNSTOPPABLE]]로 리산드라 W의 [[ROOT]], R의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]], [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Lissandra's W [[ROOT]] and R [[STUN]]. \n However, [[ROOT]] and [[STUN]] remain after [[UNSTOPPABLE]] ends."],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 헤카림 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 헤카림 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]를 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
