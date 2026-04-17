// app/data/matchups/amumu/amumu_skarner.ts
import type { MatchupSummary } from "../_types";

export const amumu_skarner: MatchupSummary = {
  champs: ["amumu", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 스카너 E의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로도 스카너 E, R의 [[SUPPRESS]]을 무시할 수 없음. \n 단, 스카너 E의 [[STUN]]에 걸리고 아무무 Q가 적중하면 [[DASH]]할 수 있음. 단, [[STUN]]은 남아있음.", 
        "아무무 Q(투척, 돌진단계)로 스카너 R의 [[SUPPRESS]]를 탈출 할 수 없음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Skarner's E [[SKILL_CHANNEL]].", "Amumu's Q [[CC_BUFFER]] cannot ignore Skarner's E and R [[SUPPRESS]]. \n However, if Amumu is hit by Skarner's E [[STUN]] and Q lands, Amumu can still [[DASH]]. \n However, the [[STUN]] still applies.", "Amumu cannot escape Skarner's R [[SUPPRESS]] with Q (throw or dash phase)."],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
