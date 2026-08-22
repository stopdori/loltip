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
      ko: ["Q는 케이틀린 W의 [[ROOT]]에 걸리면 사용할 수 없음.", 
        "Q의 [[STUN]]로 케이틀린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "R의 [[STUN]]로 케이틀린 E의 [[DASH]]을 끊을 수 있음.",
        "Q의 [[HOMING]] [[DASH]]으로 케이틀린 E의 [[DASH]]을 따라갈 수 있음.", 
        "Q, R의 [[STUN]]로 케틀 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 케이틀린 W의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[DASH]]중에 W를 밟아도 끊기지 않음."],
      en: ["Q cannot be used while [[ROOT]]ed by Caitlyn's W.",
        "Q [[STUN]] cannot interrupt Caitlyn's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R [[STUN]] can interrupt Caitlyn's E [[DASH]].",
        "Q [[HOMING]] [[DASH]] can follow Caitlyn's E [[DASH]].",
        "Q and R [[STUN]] can interrupt Caitlyn's R [[SKILL_CHANNEL]].",
        "Q [[CC_BUFFER]] can ignore Caitlyn's W [[ROOT]] and continue [[DASH]]. \n However, it will not be interrupted even if stepping on W during a [[DASH]]."],
    },
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 아무무 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Amumu's Q [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
  },
};
