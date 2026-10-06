// app/data/matchups/jayce/jayce_mel.ts
import type { MatchupSummary } from "../_types";

export const jayce_mel: MatchupSummary = {
  champs: ["jayce", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    jayce: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 제이스 캐논폼 평타, Q(일반, [[EMPOWERED]]), W의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 제이스 캐논폼 E / 해머폼 평타, Q, W, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Jayce's Cannon Form basic attacks, Q (normal, [[EMPOWERED]]), and W [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Jayce's Cannon Form E / Hammer Form basic attacks, Q, W, or E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Jayce's Hammer Form Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
