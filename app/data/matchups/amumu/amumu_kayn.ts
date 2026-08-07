// app/data/matchups/amumu/amumu_kayn.ts
import type { MatchupSummary } from "../_types";

export const amumu_kayn: MatchupSummary = {
  champs: ["amumu", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 케인(일반, 그암, 다르킨) Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 케인 Q의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 케인 Q의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 케인(다르킨) W의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Kayn (base, Rhaast, Shadow Assassin) Q [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Kayn's Q [[DASH]].", "R [[STUN]] can interrupt Kayn's Q [[DASH]].", "Q [[CC_BUFFER]] can ignore Kayn (Rhaast) W [[AIRBORNE]] and continue [[DASH]]."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
