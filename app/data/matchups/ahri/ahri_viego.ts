// app/data/matchups/ahri/ahri_viego.ts
import type { MatchupSummary } from "../_types";

export const ahri_viego: MatchupSummary = {
  champs: ["ahri", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 비에고 W의 [[SKILL_CHARGED]], [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Viego's W [[SKILL_CHARGED]] and [[DASH]]."],
    },
    viego: {
      ko: ["비에고 R의 [[UNSTOPPABLE]]로 아리 E의 [[CHARM]]을 무시할 수 있음. \n 단, [[CHARM]]은 남아있음."],
      en: ["Viego's R [[UNSTOPPABLE]] can ignore Ahri's E [[CHARM]]. \n However, the [[CHARM]] still applies."],
    },
  },
};
