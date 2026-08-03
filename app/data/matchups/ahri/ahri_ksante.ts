// app/data/matchups/ahri/ahri_ksante.ts
import type { MatchupSummary } from "../_types";

export const ahri_ksante: MatchupSummary = {
  champs: ["ahri", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 크산테 E의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt K'Sante's E [[DASH]]."],
    },
    ksante: {
      ko: ["크산테 Q3의 [[AIRBORNE]], R의 [[SUPPRESS]]로 아리 R의 [[DASH]]을 끊을 수 있음.",
        "크산테 W, R의 [[UNSTOPPABLE]]로 아리 E의 [[CHARM]]을 무시할 수 있음 \n 단, [[CHARM]]은 남아있음."],
      en: ["K'Sante's Q3 [[AIRBORNE]] and R [[SUPPRESS]] can interrupt Ahri's R [[DASH]].", "K'Sante's W and R [[UNSTOPPABLE]] can ignore Ahri's E [[CHARM]]. \n However, the [[CHARM]] still applies."],
    },
  },
};
