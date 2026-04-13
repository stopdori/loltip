// app/data/matchups/aatrox/aatrox_ivern.ts
import type { MatchupSummary } from "../_types";

export const aatrox_ivern: MatchupSummary = {
  champs: ["aatrox", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: [],
      en: [],
    },
    ivern: {
      ko: ["아이번 Q의 [[ROOT]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]은 남아있음", "아이번 R의 [[SUMMON]]으로 아트록스 W의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["Ivern's Q [[ROOT]] cannot interrupt Aatrox's E [[DASH]]. However, the [[ROOT]] still applies.", "Ivern's R [[SUMMON]] can block Aatrox's W [[SINGLE]] [[PROJECTILE]]."],
    },
  },
};
