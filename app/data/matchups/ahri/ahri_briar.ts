// app/data/matchups/ahri/ahri_briar.ts
import type { MatchupSummary } from "../_types";

export const ahri_briar: MatchupSummary = {
  champs: ["ahri", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 브라이어 Q, W를 끊을 수 있음."],
      en: ["Ahri's E can interrupt Briar's Q and W"],
    },
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라이어 R의 [[FEAR]]로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Briar's Q [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies.", "Briar's R [[FEAR]] can interrupt Ahri's R"],
    },
  },
};
