// app/data/matchups/aatrox/aatrox_gwen.ts
import type { MatchupSummary } from "../_types";

export const aatrox_gwen: MatchupSummary = {
  champs: ["aatrox", "gwen"],
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W의 [[GRAB]]효과로 그웬 E를 끊을 수 있음"],
      en: [],
    },
    gwen: {
      ko: ["그웬 W는 아트록스 Q, W를 범위 밖에서는 맞지 않음"],
      en: ["Gwen's W makes her immune to Aatrox's Q and W if he is outside the zone"],
    },
  },
};
