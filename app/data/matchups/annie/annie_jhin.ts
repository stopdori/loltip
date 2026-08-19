// app/data/matchups/annie/annie_jhin.ts
import type { MatchupSummary } from "../_types";

export const annie_jhin: MatchupSummary = {
  champs: ["annie", "jhin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 진 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R로 [[SUMMON]]된 티버로 진 E([[TRAP]])을 제거할 수 있음."],
      en: ["P [[STUN]] can interrupt Jhin's R [[SKILL_CHANNEL]].", "R [[SUMMON]]ed Tibbers can destroy Jhin's E [[TRAP]]."],
    },
    jhin: {
      ko: [],
      en: [],
    },
  },
};
