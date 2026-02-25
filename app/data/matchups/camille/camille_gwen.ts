// app/data/matchups/camille/camille_gwen.ts
import type { MatchupSummary } from "../_types";

export const camille_gwen: MatchupSummary = {
  champs: ["camille", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["카밀 R은 범위 밖에서 사용했을 때, 대부분은 적중하지만 정말 정말 드물게 그웬 W에 무효화될 때가 있음"],
      en: ["Camille's R usually hits, but very rarely it can be nullified by Gwen's W."],
    },
    gwen: {
      ko: ["그웬 W로 카밀 W를 범위 밖에서 맞지 않음",],
      en: ["Gwen's W blocks Camille's W from outside the zone."],
    },
  },
};
