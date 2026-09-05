// app/data/matchups/aatrox/aatrox_ekko.ts
import type { MatchupSummary } from "../_types";

export const aatrox_ekko: MatchupSummary = {
  champs: ["aatrox", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 에코 E의 구르기([[DASH]])을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Ekko's E roll [[DASH]]."],
    },
    ekko: {
      ko: ["W의 [[STUN]]로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
