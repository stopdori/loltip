// app/data/matchups/aatrox/aatrox_aurora.ts
import type { MatchupSummary } from "../_types";

export const aatrox_aurora: MatchupSummary = {
  champs: ["aatrox", "aurora"],
  summary: {
    ko: ["오로라 은신은 아트 W에 보임"],
    en: ["Aatrox's W reveals Aurora's invisibility."],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W의 [[GRAB]]효과로 오로라 W, E(후진단계)를 끊을 수 있음"],
      en: ["Aatrox's Q edge and W's [[GRAB]] effect can interrupt Aurora's W and E (backstep phase)"],
    },
    aurora: {
      ko: [],
      en: [],
    },
  },
};
