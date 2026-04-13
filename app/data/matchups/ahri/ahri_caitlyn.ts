// app/data/matchups/ahri/ahri_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const ahri_caitlyn: MatchupSummary = {
  champs: ["ahri", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 케틀 E(투망)의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Caitlyn's E (net) [[DASH]] and R [[SKILL_CHANNEL]]."],
    },
    caitlyn: {
      ko: ["케틀 W의 [[ROOT]]로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Caitlyn's W [[ROOT]] cannot interrupt Ahri's R [[DASH]]. However, the [[ROOT]] still applies."],
    },
  },
};
