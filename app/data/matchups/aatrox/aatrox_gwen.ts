// app/data/matchups/aatrox/aatrox_gwen.ts
import type { MatchupSummary } from "../_types";

export const aatrox_gwen: MatchupSummary = {
  champs: ["aatrox", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 그웬 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Gwen's E [[DASH]]."],
    },
    gwen: {
      ko: ["그웬 W의 [[ST_CONDITIONAL]] [[UNTARGETABLE]]로 아트록스 , Q, W를 범위 밖에서 맞지 않음."],
      en: ["Gwen's W [[ST_CONDITIONAL]] [[UNTARGETABLE]] makes Aatrox's Q and W miss when cast from outside the zone."],
    },
  },
};
