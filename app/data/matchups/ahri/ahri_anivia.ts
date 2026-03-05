// app/data/matchups/ahri/ahri_anivia.ts
import type { MatchupSummary } from "../_types";

export const ahri_anivia: MatchupSummary = {
  champs: ["ahri", "anivia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E로 애니비아 R(채널링)을 끊을 수 있음"],
      en: ["Ahri's E can interrupt Anivia's R (channeling)"],
    },
    anivia: {
      ko: ["애니비아 W로 아리 R을 끊을 수 있음\n애니비아 Q의 [[STUN]]로 아리 R을 끊을 수 없음"],
      en: ["Anivia's W can interrupt Ahri's R\nAnivia's Q [[STUN]] cannot interrupt Ahri's R"],
    },
  },
};
