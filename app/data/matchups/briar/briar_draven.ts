// app/data/matchups/briar/briar_draven.ts
import type { MatchupSummary } from "../_types";

export const briar_draven: MatchupSummary = {
  champs: ["briar", "draven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 드레이븐 E의 [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 드레이븐 E의 [[KNOCKBACK]]을 무시할 수 있음.",
      ],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Draven's E [[KNOCKBACK]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Draven's E [[KNOCKBACK]].",
      ],
    },
    draven: {
      ko: ["E의 [[KNOCKBACK]]으로 브라이어 Q, W의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[KNOCKBACK]] can interrupt Briar's Q and W [[DASH]]."],
    },
  },
};
