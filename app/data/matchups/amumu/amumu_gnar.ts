// app/data/matchups/amumu/amumu_gnar.ts
import type { MatchupSummary } from "../_types";

export const amumu_gnar: MatchupSummary = {
  champs: ["amumu", "gnar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 나르 미니폼 / 메가폼 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 나르 미니폼 / 메가폼 E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 나르 미니폼 / 메가폼 E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 나르 메가폼 W의 [[STUN]] / R의 [[KNOCKBACK]] [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Gnar's Mini and Mega form E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Gnar's Mini and Mega form E [[DASH]].", "Amumu's R [[STUN]] can interrupt Gnar's Mini and Mega form E [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Gnar's Mega form W [[STUN]] and R [[KNOCKBACK]] [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    gnar: {
      ko: [],
      en: [],
    },
  },
};
