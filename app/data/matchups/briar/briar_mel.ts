// app/data/matchups/briar/briar_mel.ts
import type { MatchupSummary } from "../_types";

export const briar_mel: MatchupSummary = {
  champs: ["briar", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 멜 E의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 멜 E의 [[ROOT]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Mel's E [[ROOT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Mel's E [[ROOT]]."],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 브라이어 E, R1의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, 브라이어 E는 간혹가다 버그로 서로에게 영향이 있는 것으로 보임. [[CLIP:https://www.youtube.com/shorts/RUUypXFBqLU]]", 
        "W의 [[REFLECT]]로 브라이어 평타, Q, W(평타, [[AOE]] 피해), R2을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 브라이어 Q, W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Briar's E and R1 [[PROJECTILE]]. [[EXIST]] \n However, Briar's E occasionally seems to interact oddly with it due to a bug. [[CLIP:https://www.youtube.com/shorts/RUUypXFBqLU]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Briar's basic attacks, Q, W (basic attacks, [[AOE]] damage), or R2. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Briar's Q and W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
