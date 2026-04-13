// app/data/matchups/aatrox/aatrox_leesin.ts
import type { MatchupSummary } from "../_types";

export const aatrox_leesin: MatchupSummary = {
  champs: ["aatrox", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 리신 Q2, W의 [[DASH]]을 끊을 수 있음."],
      en: ["Aatrox's Q [[AIRBORNE]] and W [[GRAB]] can interrupt Lee Sin's Q2 and W [[DASH]]."],
    },
    leesin: {
      ko: ["리신 R의 [[KNOCKBACK]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Lee Sin's R [[KNOCKBACK]] can interrupt Aatrox's E [[DASH]]."],
    },
  },
};
