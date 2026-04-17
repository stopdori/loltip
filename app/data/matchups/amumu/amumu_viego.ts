// app/data/matchups/amumu/amumu_viego.ts
import type { MatchupSummary } from "../_types";

export const amumu_viego: MatchupSummary = {
  champs: ["amumu", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 비에고 W의 [[DASH]], R의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 비에고 W의 [[DASH]], R의 [[BLINK]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 비에고 W의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q, R의 [[STUN]]로 비에고 W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 비에고 W의 [[STUN]], R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Viego's W [[DASH]] and R [[BLINK]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Viego's W [[DASH]] and R [[BLINK]].", "Amumu's R [[STUN]] can interrupt Viego's W [[DASH]].", "Amumu's Q and R [[STUN]] can interrupt Viego's W [[SKILL_CHANNEL]].", "Amumu's Q [[CC_BUFFER]] can ignore Viego's W [[STUN]] and R [[KNOCKBACK]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
