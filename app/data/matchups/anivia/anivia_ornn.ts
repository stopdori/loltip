// app/data/matchups/anivia/anivia_ornn.ts
import type { MatchupSummary } from "../_types";

export const anivia_ornn: MatchupSummary = {
  champs: ["anivia", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 오른 E, R2의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 오른 E, R2의 [[DASH]]을 끊을 수 있음.\n단, 오른 R2의 박치기가 R(불의 정령)에 닿으면 R2 효과 발동."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Ornn's E or R2 [[DASH]]. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Ornn's E or R2 [[DASH]].\nHowever, if Ornn's R2 headbutt reaches R (The Forge Fire), the R2 effect still triggers."],
    },
    ornn: {
      ko: [],
      en: [],
    },
  },
};
