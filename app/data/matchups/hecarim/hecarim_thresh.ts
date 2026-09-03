// app/data/matchups/hecarim/hecarim_thresh.ts
import type { MatchupSummary } from "../_types";

export const hecarim_thresh: MatchupSummary = {
  champs: ["hecarim", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 쓰레쉬 Q1의 [[STUN]], E의 [[KNOCKBACK]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음. \n 단, 쓰레쉬가 Q2를 사용할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Thresh's Q2 and W [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Thresh's Q1 [[STUN]] and E [[KNOCKBACK]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends. \n However, Thresh can still use Q2."],
    },
    thresh: {
      ko: [],
      en: [],
    },
  },
};
