// app/data/matchups/mel/mel_yunara.ts
import type { MatchupSummary } from "../_types";

export const mel_yunara: MatchupSummary = {
  champs: ["mel", "yunara"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 유나라 평타(일반 / [[EMPOWERED]] 적중, [[CHAIN]]), W(일반)의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 유나라 [[EMPOWERED]] W를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 유나라 E(R [[EMPOWERED]])의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Yunara's basic attacks (normal / [[EMPOWERED]] hit, [[CHAIN]]) and W (normal) [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Yunara's [[EMPOWERED]] W. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Yunara's E (R [[EMPOWERED]]) [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    yunara: {
      ko: [],
      en: [],
    },
  },
};
