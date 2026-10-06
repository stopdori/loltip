// app/data/matchups/gnar/gnar_mel.ts
import type { MatchupSummary } from "../_types";

export const gnar_mel: MatchupSummary = {
  champs: ["gnar", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gnar: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 나르 미니폼 평타, Q / 메가폼 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 나르 미니폼 E / 메가폼 평타, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 나르 미니폼 E / 메가폼 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] can [[REFLECT]] Gnar's Mini form basic attacks, Q / Mega form Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Gnar's Mini form E / Mega form basic attacks, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Gnar's Mini form E / Mega form E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
