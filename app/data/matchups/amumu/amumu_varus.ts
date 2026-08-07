// app/data/matchups/amumu/amumu_varus.ts
import type { MatchupSummary } from "../_types";

export const amumu_varus: MatchupSummary = {
  champs: ["amumu", "varus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q, R의 [[STUN]]로 바루스 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 바루스 R의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Q and R [[STUN]] can interrupt Varus's Q [[SKILL_CHARGED]].", "Q [[CC_BUFFER]] can ignore Varus's R [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    varus: {
      ko: [],
      en: [],
    },
  },
};
