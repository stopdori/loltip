// app/data/matchups/mel/mel_shen.ts
import type { MatchupSummary } from "../_types";

export const mel_shen: MatchupSummary = {
  champs: ["mel", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 쉔 Q의 [[PROJECTILE]]를 막을 수 있음. [[EXIST]] \n 단, Q(기의 검)는 [[REFLECT]]에 닿으면 즉시 정지.", 
        "W의 [[REFLECT]]로 쉔 평타(일반, [[EMPOWERED]]), E을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 쉔 R의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can block Shen's Q [[PROJECTILE]]. [[EXIST]] \n However, Q (Spirit Blade) stops immediately on touching the [[REFLECT]].", 
        "W [[REFLECT]] cannot [[REFLECT]] Shen's basic attacks (normal, [[EMPOWERED]]) or E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Shen's R [[SKILL_CHANNEL_MOVEMENT]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
