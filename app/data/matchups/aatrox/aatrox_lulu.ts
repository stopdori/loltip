// app/data/matchups/aatrox/aatrox_lulu.ts
import type { MatchupSummary } from "../_types";

export const aatrox_lulu: MatchupSummary = {
  champs: ["aatrox", "lulu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: [],
      en: [],
    },
    lulu: {
      ko: ["룰루 W의 [[POLYMORPH]]로 아트록스 E를 끊을 수 없음. 단, [[POLYMORPH]]는 남아있음", "룰루 R의 [[AIRBORNE]]으로 아트록스 E를 끊을 수 있음"],
      en: ["Lulu's W [[POLYMORPH]] cannot interrupt Aatrox's E. However, the [[POLYMORPH]] still applies.", "Lulu's R [[AIRBORNE]] can interrupt Aatrox's E"],
    },
  },
};
