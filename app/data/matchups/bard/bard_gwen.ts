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
      en: [""],
    },
    gwen: {
      ko: ["그웬 W(그면상)의 [[UNTARGETTABLE]]로 바드 평타, Q, R(존야)을 범위 밖에서 맞지 않음."],
      en: ["Gwen's W prevents Bard's 평타, Q and R from hitting when outside the zone"],
    },
  },
};
