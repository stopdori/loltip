// app/data/matchups/amumu/amumu_tristana.ts
import type { MatchupSummary } from "../_types";

export const amumu_tristana: MatchupSummary = {
  champs: ["amumu", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 트리스타나(트타, 트리) W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 트리 W의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 트리 W의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 트리 R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Tristana's W [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Tristana's W [[DASH]].", "R [[STUN]] can interrupt Tristana's W [[DASH]].", "Q [[CC_BUFFER]] can ignore Tristana's R [[KNOCKBACK]] and continue [[DASH]]."],
    },
    tristana: {
      ko: [],
      en: [],
    },
  },
};
