// app/data/matchups/amumu/amumu_zaahen.ts
import type { MatchupSummary } from "../_types";

export const amumu_zaahen: MatchupSummary = {
  champs: ["amumu", "zaahen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 자헨 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 자헨 E, R의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 자헨 E의 [[DASH]]을 끊을 수 있음.", 
        "Q로 자헨 Q의 [[AIRBORNE]], W의 [[GRAB]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Zaahen's E and R [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Zaahen's E and R [[DASH]].", "R [[STUN]] can interrupt Zaahen's E [[DASH]].", "Q can ignore Zaahen's Q [[AIRBORNE]] and W [[GRAB]] and continue [[DASH]]."],
    },
    zaahen: {
      ko: [],
      en: [],
    },
  },
};
