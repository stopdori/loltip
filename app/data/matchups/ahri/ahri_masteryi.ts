// app/data/matchups/ahri/ahri_masteryi.ts
import type { MatchupSummary } from "../_types";

export const ahri_masteryi: MatchupSummary = {
  champs: ["ahri", "masteryi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 마이 W의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Master Yi's W [[SKILL_CHANNEL]]."],
    },
    masteryi: {
      ko: ["마이 Q의 [[UNTARGETABLE]]로 아리 Q, W, E, R의 [[PROJECTILE]]를 피할 수 있음."],
      en: ["Master Yi's Q [[UNTARGETABLE]] can dodge Ahri's Q, W, E, and R [[PROJECTILE]]."],
    },
  },
};
