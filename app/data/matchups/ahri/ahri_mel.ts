// app/data/matchups/ahri/ahri_mel.ts
import type { MatchupSummary } from "../_types";

export const ahri_mel: MatchupSummary = {
  champs: ["ahri", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["멜 W의 [[REFLECT]]로 아리 Q, W, E, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음.",
        "멜 R의 [[CAST_COMMIT]]으로 아리 E의 [[CHARM]]에 걸려도 시전을 유지할 수 있음.",
      ],
      en: ["Mel's W [[REFLECT]] can [[REFLECT]] Ahri's Q, W, E, and R [[PROJECTILE]].", "Mel's R [[CAST_COMMIT]] can maintain its cast even when hit by Ahri's E [[CHARM]]."],
    },
  },
};
