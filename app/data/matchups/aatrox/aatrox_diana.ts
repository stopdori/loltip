// app/data/matchups/aatrox/aatrox_diana.ts
import type { MatchupSummary } from "../_types";

export const aatrox_diana: MatchupSummary = {
  champs: ["aatrox", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]]으로 다이애나 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] can interrupt Diana's E [[DASH]]."],
    },
    diana: {
      ko: ["R의 [[GRAB]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Aatrox's E [[DASH]]."],
    },
  },
};
