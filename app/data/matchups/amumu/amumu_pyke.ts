// app/data/matchups/amumu/amumu_pyke.ts
import type { MatchupSummary } from "../_types";

export const amumu_pyke: MatchupSummary = {
  champs: ["amumu", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 파이크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 파이크 E의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 파이크 E의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 파이크 Q의 [[GRAB]], E의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[SLOW]], [[STUN]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Pyke's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Pyke's E [[DASH]].", "R [[STUN]] can interrupt Pyke's E [[DASH]].", "Q [[CC_BUFFER]] can ignore Pyke's Q [[GRAB]] and E [[STUN]] and continue [[DASH]]. \n However, the [[SLOW]] and [[STUN]] still apply."],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
