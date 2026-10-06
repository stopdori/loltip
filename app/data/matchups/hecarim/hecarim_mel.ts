// app/data/matchups/hecarim/hecarim_mel.ts
import type { MatchupSummary } from "../_types";

export const hecarim_mel: MatchupSummary = {
  champs: ["hecarim", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 헤카림 R의 [[PROJECTILE]]를 막을 수 있음. [[EXIST]] \n 즉, R의 유령 기수들은 [[REFLECT]]가 아니라 정지. [[CLIP:https://www.youtube.com/shorts/qEbyNauokHo]]", 
        "W의 [[REFLECT]]로 헤카림 평타, Q, W, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 헤카림 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can block Hecarim's R [[PROJECTILE]]. [[EXIST]] \n In other words, R's spectral riders are not [[REFLECT]]ed but stopped. [[CLIP:https://www.youtube.com/shorts/qEbyNauokHo]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Hecarim's basic attacks, Q, W, or E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Hecarim's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
