// app/data/matchups/mel/mel_vladimir.ts
import type { MatchupSummary } from "../_types";

export const mel_vladimir: MatchupSummary = {
  champs: ["mel", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 블라디미르 평타, Q(일반, [[EMPOWERED]]), E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, [[REFLECT]]된 Q는 [[HEAL]] 효과 적용.", 
        "W의 [[REFLECT]]로 블라디미르 W, R(적중 효과, 종료 시 데미지)을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 블라디미르 E의 [[SKILL_CHARGED]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Vladimir's basic attacks, Q (normal, [[EMPOWERED]]), and E [[PROJECTILE]]. [[EXIST]] \n However, a [[REFLECT]]ed Q applies its [[HEAL]] effect.", 
        "W [[REFLECT]] cannot [[REFLECT]] Vladimir's W or R (on-hit effect, end-of-duration damage). [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Vladimir's E [[SKILL_CHARGED]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
