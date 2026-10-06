// app/data/matchups/mel/mel_tristana.ts
import type { MatchupSummary } from "../_types";

export const mel_tristana: MatchupSummary = {
  champs: ["mel", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 트리스타나 평타, E, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, [[REFLECT]]된 E는 멜의 평타로 [[EMPOWERED]]될 수 있음. \n 단, 트리스타나 R이 적중하고 [[KNOCKBACK]]된 대상을 [[REFLECT]]할 수는 없음.", 
        "W의 [[REFLECT]]로 트리스타나 W를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 트리스타나 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Tristana's basic attacks, E, and R [[PROJECTILE]]. [[EXIST]] \n However, a [[REFLECT]]ed E can be [[EMPOWERED]] by Mel's basic attacks. \n However, a target hit and [[KNOCKBACK]]ed by Tristana's R cannot be [[REFLECT]]ed.", 
        "W [[REFLECT]] cannot [[REFLECT]] Tristana's W. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Tristana's W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    tristana: {
      ko: [],
      en: [],
    },
  },
};
