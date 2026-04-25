// app/data/matchups/bard/bard_kled.ts
import type { MatchupSummary } from "../_types";

export const bard_kled: MatchupSummary = {
  champs: ["bard", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 클레드 승마폼 E, 낙마폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",  
        "바드 R(존야)로 클레드 승마폼 E, 낙마폼 Q의 [[DASH]]을 끊을 수 있음.", 
        "바드 R(존야)로 클레드 Q의 [[GRAB]]을 방해할 수 있음. \n 단, Q의 [[TETHER]]에 걸린 대상에게 사용해야 끌려가지 않음."],
      en: [""],
    },
    kled: {
      ko: [],
      en: [],
    },
  },
};
