// app/data/matchups/amumu/amumu_morgana.ts
import type { MatchupSummary } from "../_types";

export const amumu_morgana: MatchupSummary = {
  champs: ["amumu", "morgana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[CC_BUFFER]]로 모르가나 Q의 [[ROOT]], R의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]], [[STUN]]은 남아있음."],
      en: ["Amumu's Q [[CC_BUFFER]] can ignore Morgana's Q [[ROOT]] and R [[STUN]] and continue [[DASH]]. \n However, the [[ROOT]] and [[STUN]] still apply."],
    },
    morgana: {
      ko: [],
      en: [],
    },
  },
};
