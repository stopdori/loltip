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
      ko: ["아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 뽀삐 E, R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Aatrox's Q [[AIRBORNE]] and W [[GRAB]] can interrupt Poppy's E and R [[SKILL_CHANNEL]]."],
    },
    poppy: {
      ko:["뽀삐 W의 [[ANTI_DASH]]로 아트록스 E의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음."],
      en: ["Poppy's W [[ANTI_DASH]] can block Aatrox's E [[DASH]] and apply [[GROUNDED]]."],
    },
  },
};
