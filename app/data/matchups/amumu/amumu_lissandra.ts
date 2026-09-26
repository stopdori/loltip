// app/data/matchups/amumu/amumu_lissandra.ts
import type { MatchupSummary } from "../_types";

export const amumu_lissandra: MatchupSummary = {
  champs: ["amumu", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[CC_BUFFER]]로 리산드라 W의 [[ROOT]], R의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]], [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[DASH]]할 때 리산드라 R이 발동하면 [[DASH]]이 끊길 수 있음."],
      en: ["Q [[CC_BUFFER]] can ignore Lissandra's W [[ROOT]] and R [[STUN]] and continue [[DASH]]. \n However, the [[ROOT]] and [[STUN]] still apply. \n However, if Lissandra's R activates during Amumu's Q [[DASH]], the [[DASH]] may be interrupted."],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 아무무 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 아무무 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "아무무 Q, R의 [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
