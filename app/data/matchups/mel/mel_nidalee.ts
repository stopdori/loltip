// app/data/matchups/mel/mel_nidalee.ts
import type { MatchupSummary } from "../_types";

export const mel_nidalee: MatchupSummary = {
  champs: ["mel", "nidalee"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 니달리 인간폼 평타, Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 니달리 인간폼 W([[TRAP]]) / 쿠거폼 평타, Q, W, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Nidalee's Human Form basic attacks and Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Nidalee's Human Form W ([[TRAP]]) / Cougar Form basic attacks, Q, W, or E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Nidalee's Cougar Form W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    nidalee: {
      ko: [],
      en: [],
    },
  },
};
