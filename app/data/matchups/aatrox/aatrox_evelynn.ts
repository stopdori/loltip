// app/data/matchups/aatrox/aatrox_evelynn.ts
import type { MatchupSummary } from "../_types";

export const aatrox_evelynn: MatchupSummary = {
  champs: ["aatrox", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 이블린 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Evelynn's E [[DASH]]."],
    },
    evelynn: {
      ko: ["W의 [[CHARM]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]]"],
      en: ["W [[CHARM]] cannot interrupt Aatrox's E [[DASH]]. [[NOT_EXIST]]"],
    },
  },
};
