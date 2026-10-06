// app/data/matchups/mel/mel_nilah.ts
import type { MatchupSummary } from "../_types";

export const mel_nilah: MatchupSummary = {
  champs: ["mel", "nilah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 닐라 평타(일반, Q [[EMPOWERED]]), Q, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 닐라 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Nilah's basic attacks (normal, Q [[EMPOWERED]]), Q, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Nilah's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    nilah: {
      ko: [],
      en: [],
    },
  },
};
