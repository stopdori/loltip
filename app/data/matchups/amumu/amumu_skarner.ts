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
      ko: ["Q, R의 [[STUN]]로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "Q의 [[CC_BUFFER]]로도 스카너 E, R의 [[SUPPRESS]]을 무시할 수 없음. [[NOT_EXIST]] \n 단, 스카너 E의 [[STUN]]에 걸리고 아무무 Q가 적중하면 [[DASH]]할 수 있음. 단, [[STUN]]은 남아있음.", 
        "Q(투척, 돌진단계)로 스카너 R의 [[SUPPRESS]]를 탈출할 수 없음. [[NOT_EXIST]]"],
      en: ["Q and R [[STUN]] can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "Even Q [[CC_BUFFER]] cannot ignore Skarner's E and R [[SUPPRESS]]. [[NOT_EXIST]] \n However, if Amumu is hit by Skarner's E [[STUN]] and Q lands, Amumu can still [[DASH]]. However, the [[STUN]] still applies.", 
        "Q (throw, dash phase) cannot escape Skarner's R [[SUPPRESS]]. [[NOT_EXIST]]"],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
