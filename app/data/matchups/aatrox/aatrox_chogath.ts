// app/data/matchups/aatrox/aatrox_chogath.ts
import type { MatchupSummary } from "../_types";

export const aatrox_chogath: MatchupSummary = {
  champs: ["aatrox", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: [],
      en: [],
    },
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음.",
        "W의 [[SILENCE]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Aatrox's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Aatrox's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
