// app/data/matchups/amumu/amumu_naafiri.ts
import type { MatchupSummary } from "../_types";

export const amumu_naafiri: MatchupSummary = {
  champs: ["amumu", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 나피리 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 나피리 E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 나피리 E의 [[DASH]] / R의 [[DASH]], [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아무무 Q, R의 [[STUN]]로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Naafiri's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Naafiri's E [[DASH]].", "Amumu's R [[STUN]] can interrupt Naafiri's E [[DASH]] and R [[DASH]] and [[SKILL_CHANNEL]].", "Amumu's Q and R [[STUN]] can interrupt Naafiri's R [[SKILL_CHANNEL]]."],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
