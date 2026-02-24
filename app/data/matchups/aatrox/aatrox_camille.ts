// app/data/matchups/aatrox/aatrox_camille.ts
import type { MatchupSummary } from "../_types";

export const aatrox_camille: MatchupSummary = {
  champs: ["aatrox", "camille"],
  summary: {
    ko: ["카밀 R은 아트록스 W 사슬 효과를 무시함"],
    en: ["Camille's R dodges Aatrox's W chain."],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W의 [[GRAB]]효과로 카밀 E를 끊을 수 있음"],
      en: ["Aatrox's Q edge and W's [[GRAB]] effect can interrupt Camille's E"],
    },
    camille: {
      ko: [],
      en: [],
    },
  },
};
