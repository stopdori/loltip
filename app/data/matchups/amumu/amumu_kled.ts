// app/data/matchups/amumu/amumu_kled.ts
import type { MatchupSummary } from "../_types";

export const amumu_kled: MatchupSummary = {
  champs: ["amumu", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 클레드 승마폼 E의 [[DASH]], 낙마폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 클레드 승마폼 E, 낙마폼 Q의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 클레드 승마폼 Q의 [[GRAB]], R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Kled's mounted E and dismounted Q [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Kled's mounted E and dismounted Q [[DASH]].", "R [[STUN]] can interrupt Kled's mounted E and dismounted Q [[DASH]].", "Q [[CC_BUFFER]] can ignore Kled's mounted Q [[GRAB]] and R [[AIRBORNE]] and continue [[DASH]]."],
    },
    kled: {
      ko: [],
      en: [],
    },
  },
};
