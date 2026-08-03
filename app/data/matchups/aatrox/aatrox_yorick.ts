// app/data/matchups/aatrox/aatrox_yorick.ts
import type { MatchupSummary } from "../_types";

export const aatrox_yorick: MatchupSummary = {
  champs: ["aatrox", "yorick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["E의 [[DASH]]으로 요릭 W([[TERRAIN]])를 [[WALL_HOP]] 할 수 있음.", ],
      en: ["E [[DASH]] can [[WALL_HOP]] over Yorick's W [[TERRAIN]]."],
    },
    yorick: {
      ko: ["요릭 P, R의 [[SUMMON]]으로 아트록스 W의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["Yorick's P and R [[SUMMON]] can block Aatrox's W [[SINGLE]] [[PROJECTILE]]."],
    },
  },
};
