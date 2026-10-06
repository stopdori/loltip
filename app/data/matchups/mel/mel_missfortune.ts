// app/data/matchups/mel/mel_missfortune.ts
import type { MatchupSummary } from "../_types";

export const mel_missfortune: MatchupSummary = {
  champs: ["mel", "missfortune"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 미스포츈 평타(일반, [[EMPOWERED]]), Q(적중, [[CHAIN]]), R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, 미스포츈 Q는 [[REFLECT]]되기 전의 상태에따라 [[CHAIN]], [[CRIT]] 효과도 다름. \n 단, 평타, Q는 미스포츈 P의 효과가 적용될 수 있음.", 
        "W의 [[REFLECT]]로 미스포츈 E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 미스포츈 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Miss Fortune's basic attacks (normal, [[EMPOWERED]]), Q (hit, [[CHAIN]]), and R [[PROJECTILE]]. [[EXIST]] \n However, Miss Fortune's Q [[CHAIN]] and [[CRIT]] effects differ depending on its state before being [[REFLECT]]ed. \n However, basic attacks and Q can apply Miss Fortune's P effect.", 
        "W [[REFLECT]] cannot [[REFLECT]] Miss Fortune's E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Miss Fortune's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    missfortune: {
      ko: [],
      en: [],
    },
  },
};
