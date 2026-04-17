// app/data/matchups/amumu/amumu_corki.ts
import type { MatchupSummary } from "../_types";

export const amumu_corki: MatchupSummary = {
  champs: ["amumu", "corki"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 코르키 W(발키리)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 코르키 W(발키리)의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 코르키 W(발키리)의 [[DASH]]을 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Corki's W (Valkyrie) [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Corki's W (Valkyrie) [[DASH]].", "Amumu's R [[STUN]] can interrupt Corki's W (Valkyrie) [[DASH]]."],
    },
    corki: {
      ko: [],
      en: [],
    },
  },
};
