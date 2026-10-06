// app/data/matchups/mel/mel_pyke.ts
import type { MatchupSummary } from "../_types";

export const mel_pyke: MatchupSummary = {
  champs: ["mel", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 파이크 Q([[SKILL_CHARGED]]), E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, [[REFLECT]]된 E의 [[PROJECTILE]]는 멜과 파이크 사이의 경로가 아니라, 파이크가 생성한 경로 그대로 [[REFLECT]].", 
        "W의 [[REFLECT]]로 파이크 평타, Q(짧은), R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 파이크 Q의 [[SKILL_CHARGED]], E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Pyke's Q ([[SKILL_CHARGED]]) and E [[PROJECTILE]]. [[EXIST]] \n However, a [[REFLECT]]ed E [[PROJECTILE]] is [[REFLECT]]ed along the path Pyke created, not the path between Mel and Pyke.", 
        "W [[REFLECT]] cannot [[REFLECT]] Pyke's basic attacks, Q (short), or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Pyke's Q [[SKILL_CHARGED]] and E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
