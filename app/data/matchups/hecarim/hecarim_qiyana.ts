// app/data/matchups/hecarim/hecarim_qiyana.ts
import type { MatchupSummary } from "../_types";

export const hecarim_qiyana: MatchupSummary = {
  champs: ["hecarim", "qiyana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 키아나 W, E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 키아나 물Q의 [[ROOT]] / R의 [[KNOCKBACK]], [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]], [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Qiyana's W and E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Qiyana's water Q [[ROOT]] / R [[KNOCKBACK]] and [[STUN]]. \n However, [[ROOT]] and [[STUN]] remain after [[UNSTOPPABLE]] ends."],
    },
    qiyana: {
      ko: [],
      en: [],
    },
  },
};
