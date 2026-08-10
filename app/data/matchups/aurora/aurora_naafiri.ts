// app/data/matchups/aurora/aurora_naafiri.ts
import type { MatchupSummary } from "../_types";

export const aurora_naafiri: MatchupSummary = {
  champs: ["aurora", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: [],
      en: [],
    },
    naafiri: {
      ko: ["나피리 R의 [[SKILL_CHANNEL]]은 오로라 R의 [[UNTARGETABLE]] [[BLINK]]에도 끊기지 않고 사용됨. \n 단, 데미지가 무효화될 수 있음. 무효화 방법은 [[UNTARGETABLE]] 상태일 때 접촉하면 무효."],
      en: ["Naafiri's R [[SKILL_CHANNEL]] is not interrupted even by Aurora's R [[UNTARGETABLE]] [[BLINK]]. \n However, the damage may be nullified. It is nullified when it makes contact while Aurora is [[UNTARGETABLE]]."],
    },
  },
};
