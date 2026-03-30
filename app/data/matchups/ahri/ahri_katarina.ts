// app/data/matchups/ahri/ahri_katarina.ts
import type { MatchupSummary } from "../_types";

export const ahri_katarina: MatchupSummary = {
  champs: ["ahri", "katarina"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 카타리나 R(채널링)을 끊을 수 있음."],
      en: ["Ahri's E can interrupt Katarina's R(channeling)"],
    },
    katarina: {
      ko: ["카타리나 Q(단검 투척)의 투사체가 아리 R을 따라갈 수 있음."],
      en: ["Katarina's Q (dagger throw) projectile can follow Ahri's R"],
    },
  },
};
