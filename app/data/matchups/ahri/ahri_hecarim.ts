// app/data/matchups/ahri/ahri_hecarim.ts
import type { MatchupSummary } from "../_types";

export const ahri_hecarim: MatchupSummary = {
  champs: ["ahri", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [],
      en: [],
    },
    hecarim: {
      ko: ["헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]로 아리 R의 [[DASH]]을 끊을 수 있음.", 
        "헤카림 R의 [[UNSTOPPABLE]]로 아리 E의 [[CHARM]]을 무시할 수 있음. \n 단, [[CHARM]]은 남아있음."],
      en: ["Hecarim's E [[KNOCKBACK]] and R [[FEAR]] can interrupt Ahri's R [[DASH]].", "Hecarim's R [[UNSTOPPABLE]] allows him to ignore Ahri's E [[CHARM]]. However, the [[CHARM]] still applies."],
    },
  },
};
