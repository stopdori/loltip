// app/data/matchups/ambessa/ambessa_qiyana.ts
import type { MatchupSummary } from "../_types";

export const ambessa_qiyana: MatchupSummary = {
  champs: ["ambessa", "qiyana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 키아나 W, E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 키아나 물Q의 [[ROOT]], R의 [[KNOCKBACK]] [[STUN]] 을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]], [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Qiyana's W and E [[DASH]].", "R [[UNSTOPPABLE]] can ignore Qiyana's water Q [[ROOT]] and R [[KNOCKBACK]] [[STUN]]. \n However, the [[ROOT]] and [[STUN]] still apply after [[UNSTOPPABLE]] ends."],
    },
    qiyana: {
      ko: [],
      en: [],
    },
  },
};
