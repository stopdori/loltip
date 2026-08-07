// app/data/matchups/amumu/amumu_nautilus.ts
import type { MatchupSummary } from "../_types";

export const amumu_nautilus: MatchupSummary = {
  champs: ["amumu", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 노틸러스 Q의 [[GRAB]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 노틸러스 Q의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 노틸러스 Q의 [[GRAB]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 노틸러스 P의 [[ROOT]], Q의 [[GRAB]] [[STUN]], R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]], [[STUN]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Nautilus's Q [[GRAB]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Nautilus's Q [[DASH]].", "R [[STUN]] can interrupt Nautilus's Q [[GRAB]].", "Q [[CC_BUFFER]] can ignore Nautilus's P [[ROOT]], Q [[GRAB]] [[STUN]], and R [[AIRBORNE]] and continue [[DASH]]. \n However, the [[ROOT]] and [[STUN]] still apply."],
    },
    nautilus: {
      ko: [],
      en: [],
    },
  },
};
