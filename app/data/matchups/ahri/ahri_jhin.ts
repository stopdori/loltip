// app/data/matchups/ahri/ahri_jhin.ts
import type { MatchupSummary } from "../_types";

export const ahri_jhin: MatchupSummary = {
  champs: ["ahri", "jhin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 진 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Jhin's R [[SKILL_CHANNEL]]."],
    },
    jhin: {
      ko: ["진 W의 [[ROOT]]으로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Jhin's W [[ROOT]] cannot interrupt Ahri's R [[DASH]]. However, the [[ROOT]] still applies."],
    },
  },
};
