// app/data/matchups/briar/briar_karthus.ts
import type { MatchupSummary } from "../_types";

export const briar_karthus: MatchupSummary = {
  champs: ["briar", "karthus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[FEAR]]로 카서스 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q and E [[STUN]], E [[KNOCKBACK]], and R [[FEAR]] can interrupt Karthus's R [[SKILL_CHANNEL]]."],
    },
    karthus: {
      ko: ["P의 죽음 극복을 브라이어 E의 [[KNOCKBACK]]으로 밀어낼 수 없음."],
      en: ["Karthus's P (Death Defied) cannot be pushed by Briar's E [[KNOCKBACK]]."],
    },
  },
};
