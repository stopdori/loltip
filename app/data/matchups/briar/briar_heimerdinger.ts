// app/data/matchups/briar/briar_heimerdinger.ts
import type { MatchupSummary } from "../_types";

export const briar_heimerdinger: MatchupSummary = {
  champs: ["briar", "heimerdinger"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[KNOCKBACK]]으로 하이머딩거 Q, RQ로 [[SUMMON]]된 포탑을 [[KNOCKBACK]] 할 수 있음.",
        "E의 [[CAST_COMMIT]]으로 하이머딩거 E, RE의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 하이머딩거 E, RE의 [[STUN]]을 무시할 수 있음.",],
      en: ["The turret [[SUMMON]]ed by Heimerdinger's Q or RQ can be pushed by Briar's E [[KNOCKBACK]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Heimerdinger's E or RE [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Heimerdinger's E and RE [[STUN]]."],
    },
    heimerdinger: {
      ko: [],
      en: [],
    },
  },
};
