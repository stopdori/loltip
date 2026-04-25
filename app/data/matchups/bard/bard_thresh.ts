// app/data/matchups/bard/bard_thresh.ts
import type { MatchupSummary } from "../_types";

export const bard_thresh: MatchupSummary = {
  champs: ["bard", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 있음."],
      en: [""],
    },
    thresh: {
      ko: ["쓰레쉬 Q을 맞힌 대상에게 바드 R(존야)을 맞혔을 때,"],
      en: [],
    },
  },
};
