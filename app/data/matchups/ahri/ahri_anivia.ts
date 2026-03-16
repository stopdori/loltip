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
      ko: ["아리 E의 [[CHARM]]으로 애니비아 R(채널링)을 끊을 수 있음"],
      en: ["Ahri's E can interrupt Anivia's R (channeling)"],
    },
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 아리 R의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 아리 R의 이동을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Ahri's R movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Ahri's R movement."],
    },
  },
};
