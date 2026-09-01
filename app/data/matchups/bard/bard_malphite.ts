// app/data/matchups/bard/bard_malphite.ts
import type { MatchupSummary } from "../_types";

export const bard_malphite: MatchupSummary = {
  champs: ["bard", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 R(존야)로 말파이트 R의 [[UNSTOPPABLE]] [[DASH]]을 끊을 수 없음."],
      en: [],
    },
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 바드 Q의 [[STUN]], R(존야)의 [[STASIS]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Bard's Q [[STUN]] and R (Zhonya's) [[STASIS]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
