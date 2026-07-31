// app/data/matchups/briar/briar_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const briar_caitlyn: MatchupSummary = {
  champs: ["briar", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 케이틀린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "브라이어 E의 [[KNOCKBACK]], R의 [[FEAR]]로 케이틀린 E의 [[DASH]]을 끊을 수 있음.",
        "브라이어 E의 [[CAST_COMMIT]]으로 케이틀린 W의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", ],
      en: ["Briar's Q [[STUN]] cannot interrupt Caitlyn's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R [[FEAR]] can interrupt Caitlyn's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Caitlyn's W [[ROOT]]."],
    },
    caitlyn: {
      ko: [],
      en: [],
    },
  },
};
