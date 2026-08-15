// app/data/matchups/rengar/rengar_viego.ts
import type { MatchupSummary } from "../_types";

export const rengar_viego: MatchupSummary = {
  champs: ["rengar", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    rengar: {
      ko: [""],
      en: [""],
    },
    viego: {
      ko: ["비에고가 E의 [[CAMOUFLAGE]] [[ZONE]]을 미리 설치하고 렝가를 지배한 뒤 [[CAMOUFLAGE]] 상태가 되어도 \n 렝가 R의 [[PASSIVE_BONUS]] (위장 중 [[DASH]])은 발동하지 않음."],
      en: ["Even if Viego pre-places his E [[CAMOUFLAGE]] [[ZONE]], possesses Rengar, and becomes [[CAMOUFLAGE]]d, \n Rengar R's [[PASSIVE_BONUS]] (allows [[DASH]] while camouflaged) does not trigger."],
    },
  },
};
