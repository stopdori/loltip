// app/data/matchups/mel/mel_volibear.ts
import type { MatchupSummary } from "../_types";

export const mel_volibear: MatchupSummary = {
  champs: ["mel", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 볼리베어 평타(일반 / [[EMPOWERED]] 적중, [[CHAIN]] 효과), Q, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Volibear's basic attacks (normal / [[EMPOWERED]] hit, [[CHAIN]] effect), Q, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] can cancel Volibear's Q [[TRANSFORM]]. [[EXIST]] \n However, Volibear's Q [[CDR_RESET]]."],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 멜 E의 [[ROOT]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Mel's E [[ROOT]]. [[EXIST]] \n However, the [[ROOT]] still applies after [[UNSTOPPABLE]] ends."],
    },
  },
};
