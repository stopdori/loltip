// app/data/matchups/ahri/ahri_naafiri.ts
import type { MatchupSummary } from "../_types";

export const ahri_naafiri: MatchupSummary = {
  champs: ["ahri", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E([[CHARM]])의 [[KNOCKDOWN]]으로 나피리 E, R의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "E의 [[CHARM]]으로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"
      ],
      en: ["E [[CHARM]] can interrupt Naafiri's E and R [[DASH]]."],
    },
    naafiri: {
      ko: ["나피리 W의 [[UNTARGETABLE]]로 아리 평타, Q, W, E, R의 [[PROJECTILE]]를 피할 수 있음."],
      en: ["Naafiri's W [[UNTARGETABLE]] can dodge Ahri's basic attacks, Q, W, E, and R [[PROJECTILE]]."],
    },
  },
};
