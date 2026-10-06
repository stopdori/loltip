// app/data/matchups/mel/mel_varus.ts
import type { MatchupSummary } from "../_types";

export const mel_varus: MatchupSummary = {
  champs: ["mel", "varus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 바루스 평타, Q(일반, W [[EMPOWERED]]), E, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, [[REFLECT]]된 평타, R은 W의 [[DEBUFF_STACK]]도 함께적용. \n 이때, [[REFLECT]]된 Q(일반, W [[EMPOWERED]]), E가 적중하면 [[STACK_CONSUME]].", 
        "W의 [[REFLECT]]로 바루스 R의 [[ZONE]] [[CHAIN]]를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 바루스 Q의 [[SKILL_CHARGED]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Varus's basic attacks, Q (normal, W [[EMPOWERED]]), E, and R [[PROJECTILE]]. [[EXIST]] \n However, [[REFLECT]]ed basic attacks and R also apply W's [[DEBUFF_STACK]]. \n In this case, if the [[REFLECT]]ed Q (normal, W [[EMPOWERED]]) or E hits, it triggers [[STACK_CONSUME]].", 
        "W [[REFLECT]] cannot [[REFLECT]] Varus's R [[ZONE]] [[CHAIN]]. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Varus's Q [[SKILL_CHARGED]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    varus: {
      ko: [],
      en: [],
    },
  },
};
