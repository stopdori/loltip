// app/data/matchups/ahri/ahri_heimerdinger.ts
import type { MatchupSummary } from "../_types";

export const ahri_heimerdinger: MatchupSummary = {
  champs: ["ahri", "heimerdinger"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CAHRM]]으로 하이머딩거 RW(강화)의 [[CAST_COMMIT]] 끊을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E [[CHARM]] cannot interrupt Heimerdinger's RW (empowered) [[CAST_COMMIT]].\nHowever, the [[CHARM]] still applies."],
    },
    heimerdinger: {
      ko: ["하이머딩거 Q(포탑), RQ(강화 포탑)로 아리 E를 막을 수 있음."],
      en: ["Heimerdinger's Q (turret) can block Ahri's E"],
    },
  },
};
