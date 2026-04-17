// app/data/matchups/anivia/anivia_nami.ts
import type { MatchupSummary } from "../_types";

export const anivia_nami: MatchupSummary = {
  champs: ["anivia", "nami"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: [],
      en: [],
    },
    nami: {
      ko: ["나미 W의 [[CHAIN]]는 애니비아 에게 한 번만 튕김. \n 즉, 애니비아에게 나미 W가 1번 튕기고 나서 P(알)가 됐을 때 알에게 다시 튕기지 않음."],
      en: ["Nami's W [[CHAIN]] bounces only once on Anivia. \n If Anivia transforms into P (Egg) after being hit by Nami's W, the chain does not bounce to the Egg again."],
    },
  },
};
