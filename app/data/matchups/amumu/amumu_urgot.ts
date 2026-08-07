// app/data/matchups/amumu/amumu_urgot.ts
import type { MatchupSummary } from "../_types";

export const amumu_urgot: MatchupSummary = {
  champs: ["amumu", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 우르곳 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 우르곳 E의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 우르곳 E의 [[DASH]]을 끊을 수 있음.", 
        "Q로 우르곳 E의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음.", 
        "Q의 [[CC_BUFFER]]로 우르곳 R2의 [[SUPPRESS]]을 탈출할 수 없음."],
      en: ["Q [[STUN]] cannot interrupt Urgot's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Urgot's E [[DASH]].", "R [[STUN]] can interrupt Urgot's E [[DASH]].", "Q can ignore Urgot's E [[KNOCKBACK]] and continue [[DASH]].", "Q [[CC_BUFFER]] cannot escape Urgot's R2 [[SUPPRESS]]."],
    },
    urgot: {
      ko: [],
      en: [],
    },
  },
};
