// app/data/matchups/anivia/anivia_briar.ts
import type { MatchupSummary } from "../_types";

export const anivia_briar: MatchupSummary = {
  champs: ["anivia", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 브라이어 W의 [[DASH]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 브라이어 W의 [[DASH]을 끊을 수 있음.", "애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 브라이어 E(시전 집중)를 끊을 수 없음.\n단, [[STUN]]은 남아있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Briar's W movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Briar's W movement.", "Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] cannot interrupt Briar's E (channeling).\nHowever, [[STUN]] still applies."],
    },
    briar: {
      ko: [],
      en: [],
    },
  },
};
