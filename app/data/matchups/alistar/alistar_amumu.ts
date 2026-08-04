// app/data/matchups/alistar/alistar_amumu.ts
import type { MatchupSummary } from "../_types";

export const alistar_amumu: MatchupSummary = {
  champs: ["alistar", "amumu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 아무무 Q의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 아무무 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 아무무 Q, R의 [[STUN]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Amumu's Q [[DASH]].", "E [[STUN]] cannot interrupt Amumu's Q [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Amumu's Q and R [[STUN]]."],
    },
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 알리스타 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 알리스타 W의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Alistar's W [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow.", "Amumu's R [[STUN]] can interrupt Alistar's W [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
