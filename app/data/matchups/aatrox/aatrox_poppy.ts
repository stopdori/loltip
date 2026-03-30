// app/data/matchups/aatrox/aatrox_poppy.ts
import type { MatchupSummary } from "../_types";

export const aatrox_poppy: MatchupSummary = {
  champs: ["aatrox", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W [[GRAB]]효과로 뽀삐 E, R(시전집중)을 끊을 수 있음"],
      en: ["Aatrox's Q (sweet spot) and W's [[GRAB]] effect can interrupt Poppy's E and R (channeling)"],
    },
    poppy: {
      ko:["뽀삐 W의 [[ANTI_DASH]]로 아트록스 E의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음."],
      en: [],
    },
  },
};
