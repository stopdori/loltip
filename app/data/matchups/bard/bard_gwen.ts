// app/data/matchups/bard/bard_gwen.ts
import type { MatchupSummary } from "../_types";

export const bard_gwen: MatchupSummary = {
  champs: ["bard", "gwen"],
  summary: {
    ko: ["그면상으로 바드 R(존야)을 피함"],
    en: ["Gwen's W dodges Bard's R."],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 그웬 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",  
        "바드 R(존야)로 그웬 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Bard's Q [[STUN]] cannot interrupt Gwen's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Bard's R (Zhonya) can interrupt Gwen's E [[DASH]]."],
    },
    gwen: {
      ko: ["그웬 W(그면상)의 [[UNTARGETABLE]]로 바드 평타, Q, R(존야)을 범위 밖에서 맞지 않음."],
      en: ["Gwen's W [[UNTARGETABLE]] makes Bard's basic attacks, Q and R (Zhonya) miss when cast from outside the zone."],
    },
  },
};
