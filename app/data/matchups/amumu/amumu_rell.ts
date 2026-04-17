// app/data/matchups/amumu/amumu_rell.ts
import type { MatchupSummary } from "../_types";

export const amumu_rell: MatchupSummary = {
  champs: ["amumu", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 렐 W(붕괴)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 렐 W(붕괴)의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 렐 승마폼 W(붕괴)의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 렐 Q의 [[STUN]], W의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Rell's W (Crash Down) [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Rell's W (Crash Down) [[DASH]].", "Amumu's R [[STUN]] can interrupt Rell's mounted W (Crash Down) [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Rell's Q [[STUN]] and W [[AIRBORNE]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
