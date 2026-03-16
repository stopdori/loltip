// app/data/matchups/anivia/anivia_neeko.ts
import type { MatchupSummary } from "../_types";

export const anivia_neeko: MatchupSummary = {
  champs: ["anivia", "neeko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 니코 R(시전 집중)을 끊을 수 없음.\n단, 애니비아 Q의 [[STUN]]은 남아있음."],
      en: ["Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] cannot interrupt Neeko's R (channeling).\nHowever, [[STUN]] still applies."],
    },
    neeko: {
      ko: [],
      en: [],
    },
  },
};
