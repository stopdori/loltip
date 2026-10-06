// app/data/matchups/mel/mel_vi.ts
import type { MatchupSummary } from "../_types";

export const mel_vi: MatchupSummary = {
  champs: ["mel", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 바이 평타, Q, W([[DEBUFF_STACK]]), E(일반, [[AOE]] 피해), R(대상, 대상 주변 [[KNOCKBACK]] 피해)을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 바이 Q의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 있음. [[EXIST]]", 
        "E의 [[ROOT]]으로 바이 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Vi's basic attacks, Q, W ([[DEBUFF_STACK]]), E (normal, [[AOE]] damage), or R (target, [[KNOCKBACK]] damage around the target). [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Vi's Q [[SKILL_CHANNEL_MOVEMENT]]. [[EXIST]]", 
        "E [[ROOT]] cannot interrupt Vi's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    vi: {
      ko: [],
      en: [],
    },
  },
};
