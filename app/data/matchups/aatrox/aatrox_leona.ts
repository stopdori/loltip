// app/data/matchups/aatrox/aatrox_leona.ts
import type { MatchupSummary } from "../_types";

export const aatrox_leona: MatchupSummary = {
  champs: ["aatrox", "leona"],
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W [[GRAB]]효과로 레오나 E의 돌진단계를 끊을 수 있음"],
      en: ["Aatrox's Q (sweet spot) or W pull can interrupt Leona's E"],
    },
    leona: {
      ko: ["레오나 E의 [[ROOT]]와 Q, R의 [[STUN]]로 아트록스 E를 끊을 수 없음. 단, [[ROOT]], [[STUN]]은 남아있음"],
      en: [],
    },
  },
};
