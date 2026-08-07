// app/data/matchups/amumu/amumu_jhin.ts
import type { MatchupSummary } from "../_types";

export const amumu_jhin: MatchupSummary = {
  champs: ["amumu", "jhin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q, R의 [[STUN]]로 진 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 진 W의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Q and R [[STUN]] can interrupt Jhin's R [[SKILL_CHANNEL]].", "Q [[CC_BUFFER]] can ignore Jhin's W [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    jhin: {
      ko: [],
      en: [],
    },
  },
};
