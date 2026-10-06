// app/data/matchups/mel/mel_reksai.ts
import type { MatchupSummary } from "../_types";

export const mel_reksai: MatchupSummary = {
  champs: ["mel", "reksai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 렉사이 매복폼 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 렉사이 돌출폼 평타, Q, E, R / 매복폼 R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 렉사이 매복폼 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Rek'Sai's Burrowed Form Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Rek'Sai's Unburrowed Form basic attacks, Q, E, R / Burrowed Form R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Rek'Sai's Burrowed Form E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    reksai: {
      ko: [],
      en: [],
    },
  },
};
