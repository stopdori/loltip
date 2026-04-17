// app/data/matchups/amumu/amumu_xinzhao.ts
import type { MatchupSummary } from "../_types";

export const amumu_xinzhao: MatchupSummary = {
  champs: ["amumu", "xinzhao"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 신짜오 E의 [[DASH]]를 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 신짜오 E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 신짜오 E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q로 신짜오 Q3의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Xin Zhao's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Xin Zhao's E [[DASH]].", "Amumu's R [[STUN]] can interrupt Xin Zhao's E [[DASH]].", "Amumu's Q can ignore Xin Zhao's Q3 [[AIRBORNE]] and R [[KNOCKBACK]] and continue [[DASH]]."],
    },
    xinzhao: {
      ko: [],
      en: [],
    },
  },
};
