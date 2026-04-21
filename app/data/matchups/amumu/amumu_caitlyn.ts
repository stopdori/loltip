// app/data/matchups/amumu/amumu_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const amumu_caitlyn: MatchupSummary = {
  champs: ["amumu", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 케이틀린(케틀) E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 케틀 E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 케틀 E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q, R의 [[STUN]]로 케틀 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 케틀 W의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[DASH]]중에 W를 밟아도 끊기지 않음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Caitlyn's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Caitlyn's E [[DASH]].", "Amumu's R [[STUN]] can interrupt Caitlyn's E [[DASH]].", "Amumu's Q and R [[STUN]] can interrupt Caitlyn's R [[SKILL_CHANNEL]].", "Amumu's Q [[CC_BUFFER]] can ignore Caitlyn's W [[ROOT]] and continue [[DASH]]. \n However, it will not be interrupted even if stepping on W during a [[DASH]]."],
    },
    caitlyn: {
      ko: ["케이틀린 W(덫)을 아무무가 밟으면 아무무가 Q(붕대)를 사용할 수 없음."],
      en: ["If Amumu steps on Caitlyn's W (trap), Amumu cannot use Q (Bandage Toss)."],
    },
  },
};
