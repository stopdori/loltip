// app/data/matchups/mel/mel_xerath.ts
import type { MatchupSummary } from "../_types";

export const mel_xerath: MatchupSummary = {
  champs: ["mel", "xerath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 제라스 평타, E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 제라스 Q, W, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 제라스 Q의 [[SKILL_CHARGED]], R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Xerath's basic attacks and E [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Xerath's Q, W, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Xerath's Q [[SKILL_CHARGED]] and R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    xerath: {
      ko: [],
      en: [],
    },
  },
};
