// app/data/matchups/mel/mel_viego.ts
import type { MatchupSummary } from "../_types";

export const mel_viego: MatchupSummary = {
  champs: ["mel", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 비에고 W의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 비에고 평타(일반, Q [[EMPOWERED]]), E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 비에고 W의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 있음. [[EXIST]]", 
      "E의 [[ROOT]]으로 비에고 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Viego's W [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Viego's basic attacks (normal, Q [[EMPOWERED]]), E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Viego's W [[SKILL_CHANNEL_MOVEMENT]]. [[EXIST]]", 
        "E [[ROOT]] cannot interrupt Viego's W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
