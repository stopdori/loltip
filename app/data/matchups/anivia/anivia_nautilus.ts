// app/data/matchups/anivia/anivia_nautilus.ts
import type { MatchupSummary } from "../_types";

export const anivia_nautilus: MatchupSummary = {
  champs: ["anivia", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 W(벽)으로 엘리스 거미폼 E(줄타기)의 낙하를 방해 할 수 없음."],
      en: ["Anivia's W (wall) cannot block Elise's spider form E (Rappel) landing."],
    },
    nautilus: {
      ko: ["노틸러스 R을 애니비아에게 사용했을 때, 애니비아가 P(알)로 변해도 노틸러스 R은 애니비아 P(알)를 추격."],
      en: ["When Nautilus's R is targeting Anivia, it continues to chase Anivia's P (Egg) even after she transforms."],
    },
  },
};
