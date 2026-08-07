// app/data/matchups/amumu/amumu_zeri.ts
import type { MatchupSummary } from "../_types";

export const amumu_zeri: MatchupSummary = {
  champs: ["amumu", "zeri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 제리 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 제리 E의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 제리 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Zeri's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Zeri's E [[DASH]].", "R [[STUN]] can interrupt Zeri's E [[DASH]]."],
    },
    zeri: {
      ko: [],
      en: [],
    },
  },
};
