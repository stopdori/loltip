// app/data/matchups/bard/bard_vladimir.ts
import type { MatchupSummary } from "../_types";

export const bard_vladimir: MatchupSummary = {
  champs: ["bard", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]], R(존야)로 블라디미르 E의 [[SKILL_CHARGED]]을 끊을 수 있음. \n 단, 끊길 때 모았던 만큼의 [[SKILL_CHARGED]]은 발사."],
      en: ["Q [[STUN]] and R (Stasis) can interrupt Vladimir's E [[SKILL_CHARGED]]. \n However, Vladimir's E is not cancelled — it fires up to the charged amount."],
    },
    vladimir: {
      ko: ["블라디미르 W(웅덩이)의 [[UNTARGETABLE]]로 바드 R(존야)을 무시할 수 있음."],
      en: ["Vladimir's W [[UNTARGETABLE]] can ignore Bard's R (Stasis)."],
    },
  },
};
