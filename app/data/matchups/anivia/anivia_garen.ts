// app/data/matchups/anivia/anivia_garen.ts
import type { MatchupSummary } from "../_types";

export const anivia_garen: MatchupSummary = {
  champs: ["anivia", "garen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 가렌 E(휠윈드)를 끊을 수 없음.\n단, Q의 [[STUN]]은 남아있음."],
      en: ["Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] cannot interrupt Garen's E (whirlwind).\nHowever, Q [[STUN]] still applies."],
    },
    garen: {
      ko: [],
      en: [],
    },
  },
};
