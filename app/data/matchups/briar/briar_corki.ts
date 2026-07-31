// app/data/matchups/briar/briar_corki.ts
import type { MatchupSummary } from "../_types";

export const briar_corki: MatchupSummary = {
  champs: ["briar", "corki"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 코르키 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "브라이어 E의 [[KNOCKBACK]], R의 [[FEAR]]로 코르키 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Briar's Q [[STUN]] cannot interrupt Corki's W [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R [[FEAR]] can interrupt Corki's W [[DASH]]."],
    },
    corki: {
      ko: [],
      en: [],
    },
  },
};
