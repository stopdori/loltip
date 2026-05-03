// app/data/matchups/blitzcrank/blitzcrank_braum.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_braum: MatchupSummary = {
  champs: ["blitzcrank", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 브라움 W의 [[DASH]]을 끊을 수 있음.", 
        "블리츠크랭크 R의 [[SILENCE]]으로 브라움 W의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Braum's W [[DASH]].",
        "Blitzcrank's R [[SILENCE]] cannot interrupt Braum's W [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    braum: {
      ko: ["브라움 E(방패)로 블리츠 평타, Q, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Blitzcrank's basic attacks, Q, E and R"],
    },
  },
};
