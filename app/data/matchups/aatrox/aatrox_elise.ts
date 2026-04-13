// app/data/matchups/aatrox/aatrox_elise.ts
import type { MatchupSummary } from "../_types";

export const aatrox_elise: MatchupSummary = {
  champs: ["aatrox", "elise"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 엘리스 거미폼 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Aatrox's Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Elise's Spider Form Q [[DASH]]."],
    },
    elise: {
      ko: ["엘리스의 새끼거미가 아트록스 W의 [[PROJECTILE]]를 대신 맞을 수 있음."],
      en: ["Elise's Spiderlings can block Aatrox's W [[PROJECTILE]]."],
    },
  },
};
