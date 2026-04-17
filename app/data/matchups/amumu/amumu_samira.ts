// app/data/matchups/amumu/amumu_samira.ts
import type { MatchupSummary } from "../_types";

export const amumu_samira: MatchupSummary = {
  champs: ["amumu", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 사미라 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 사미라 E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 사미라 E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q, R의 [[STUN]]로 사미라 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 사미라 [[BA]]의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Samira's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Samira's E [[DASH]].", "Amumu's R [[STUN]] can interrupt Samira's E [[DASH]].", "Amumu's Q and R [[STUN]] can interrupt Samira's R [[SKILL_CHANNEL]].", "Amumu's Q [[CC_BUFFER]] can ignore Samira's [[BA]] [[AIRBORNE]] and continue [[DASH]]."],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
