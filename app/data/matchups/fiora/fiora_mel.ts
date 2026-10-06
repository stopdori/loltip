// app/data/matchups/fiora/fiora_mel.ts
import type { MatchupSummary } from "../_types";

export const fiora_mel: MatchupSummary = {
  champs: ["fiora", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fiora: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 피오라 평타(일반, 급소), Q, W(응수), E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]] \n 단, W(응수)가 [[STUN]] 조건을 만족했을 때, 멜이 응수를 [[REFLECT]]하면 [[STUN]]에 걸려야 하지만 걸리지 않음. (버그로 추정) [[CLIP:https://www.youtube.com/shorts/0qb_esZ4r84]]", 
        "E의 [[ROOT]]으로 피오라 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Fiora's basic attacks (normal, Vital), Q, W (Riposte), E, or R. [[NOT_EXIST]] \n However, when W (Riposte) meets the [[STUN]] condition, Mel [[REFLECT]]ing the Riposte should apply [[STUN]], but it doesn't. (Presumed bug) [[CLIP:https://www.youtube.com/shorts/0qb_esZ4r84]]", 
        "E [[ROOT]] cannot interrupt Fiora's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
