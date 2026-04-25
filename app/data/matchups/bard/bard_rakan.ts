// app/data/matchups/bard/bard_rakan.ts
import type { MatchupSummary } from "../_types";

export const bard_rakan: MatchupSummary = {
  champs: ["bard", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 라칸 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 라칸 W, E의 [[DASH]]을 끊을 수 있음.", 
        "바드 R(존야)로 라칸 R을 사용했을 때 존야 상태로 만들면, 라칸 R은 여전히 유지됨."],
      en: [""],
    },
    rakan: {
      ko: [],
      en: [],
    },
  },
};
