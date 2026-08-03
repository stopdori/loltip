// app/data/matchups/aatrox/aatrox_leblanc.ts
import type { MatchupSummary } from "../_types";

export const aatrox_leblanc: MatchupSummary = {
  champs: ["aatrox", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 르블랑 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[GRAB]] can interrupt LeBlanc's W [[DASH]]."],
    },
    leblanc: {
      ko: ["르블랑 E의 [[ROOT]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]는 남아있음."],
      en: ["LeBlanc's E [[ROOT]] cannot interrupt Aatrox's E. However, the [[ROOT]] still applies."],
    },
  },
};
