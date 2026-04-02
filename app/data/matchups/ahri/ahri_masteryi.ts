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
      ko: ["아리 E의 [[CHARM]]으로 마이 W([[SKILL_CHANNEL]])을 끊을 수 있음."],
      en: ["Ahri's E can interrupt Master Yi's W (channeling)"],
    },
    masteryi: {
      ko: ["마이 Q의 [[UNTARGETABLE]], [[TOWER_DODGE]]로 아리 Q, W, E, R을 회피할 수 있음."],
      en: ["Master Yi's Q can dodge Ahri's Q, W, E, and R"],
    },
  },
};
