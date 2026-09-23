// app/data/matchups/aatrox/aatrox_lissandra.ts
import type { MatchupSummary } from "../_types";

export const aatrox_lissandra: MatchupSummary = {
  champs: ["aatrox", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: [],
      en: [],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]는 남아있음. [[NOT_EXIST]]", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 맞았을 때, 리산드라 E2를 사용할 수 없음."],
      en: ["Lissandra's W [[ROOT]] cannot interrupt Aatrox's E. However, the [[ROOT]] still applies."],
    },
  },
};
