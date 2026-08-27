// app/data/matchups/chogath/chogath_gwen.ts
import type { MatchupSummary } from "../_types";

export const chogath_gwen: MatchupSummary = {
  champs: ["chogath", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 그웬 E의 [[DASH]]을 끊을 수 있음.",
        "W의 [[SILENCE]]으로 그웬 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Gwen's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Gwen's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    gwen: {
      ko: ["W(그면상)의 [[UNTARGETABLE]]로 초가스 Q, W, E를 범위 밖에서 맞지 않음."],
      en: ["W (Hallowed Mist) [[UNTARGETABLE]] prevents Cho'Gath's Q, W, and E from hitting her when cast from outside the mist."],
    },
  },
};
