// app/data/matchups/belveth/belveth_mel.ts
import type { MatchupSummary } from "../_types";

export const belveth_mel: MatchupSummary = {
  champs: ["belveth", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["W의 [[AIRBORNE]]으로 멜 E의 [[ROOT]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[AIRBORNE]] can interrupt Mel's E [[ROOT]]. [[EXIST]]"],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 벨베스 평타, Q, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 벨베스 Q의 [[DASH]], E의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Bel'Veth's basic attacks, Q, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Bel'Veth's Q [[DASH]] and E [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
