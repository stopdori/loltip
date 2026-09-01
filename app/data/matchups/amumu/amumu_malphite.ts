// app/data/matchups/amumu/amumu_malphite.ts
import type { MatchupSummary } from "../_types";

export const amumu_malphite: MatchupSummary = {
  champs: ["amumu", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 말파이트 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "Q의 [[CC_BUFFER]]로 말파이트 R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Malphite's R [[DASH]]. \n However, the [[STUN]] still applies.", "Q [[CC_BUFFER]] can ignore Malphite's R [[AIRBORNE]] and continue [[DASH]]."],
    },
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 아무무 Q, R의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Amumu's Q and R [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
