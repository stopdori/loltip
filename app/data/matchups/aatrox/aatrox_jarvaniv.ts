// app/data/matchups/aatrox/aatrox_jarvaniv.ts
import type { MatchupSummary } from "../_types";

export const aatrox_jarvaniv: MatchupSummary = {
  champs: ["aatrox", "jarvaniv"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q의 [[AIRBORNE]], W [[GRAB]] 효과로 자르반 EQ의 [[DASH]]를 끊을 수 있음."],
      en: ["Aatrox's Q [[AIRBORNE]] and W [[GRAB]] effect can interrupt Jarvan IV's EQ [[DASH]]."],
    },
    jarvaniv: {
      ko: ["자르반 EQ(준비단계)의 [[CC_BUFFER]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 무시할 수 있음."],
      en: ["Jarvan IV's EQ (wind-up phase) [[CC_BUFFER]] can ignore Aatrox's Q [[AIRBORNE]] and W [[GRAB]]."],
    },
  },
};
