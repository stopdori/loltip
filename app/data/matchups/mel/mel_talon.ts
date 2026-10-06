// app/data/matchups/mel/mel_talon.ts
import type { MatchupSummary } from "../_types";

export const mel_talon: MatchupSummary = {
  champs: ["mel", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 탈론 W(가는, 오는), R1, R2의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, W(오는), R2의 [[PROJECTILE]]는 멜에게 흡수되기 때문에 [[REFLECT]]처럼 보이지 않지만, 데미지가 무효화됨으로 추측할 수 있음.", 
        "W의 [[REFLECT]]로 탈론 평타, Q를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 탈론 Q, E(벽 이동)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Talon's W (outgoing, returning), R1, and R2 [[PROJECTILE]]. [[EXIST]] \n However, W (returning) and R2 [[PROJECTILE]]s are absorbed by Mel, so they don't look [[REFLECT]]ed, but the damage can be inferred to be nullified.", 
        "W [[REFLECT]] cannot [[REFLECT]] Talon's basic attacks or Q. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Talon's Q and E (wall movement) [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
