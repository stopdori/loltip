// app/data/matchups/anivia/anivia_galio.ts
import type { MatchupSummary } from "../_types";

export const anivia_galio: MatchupSummary = {
  champs: ["anivia", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 갈리오 E의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 갈리오 E(후진, 돌진 단계)의 이동을 끊을 수 있음.", "애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 갈리오 W(도발), R(시전 집중)을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Galio's E movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Galio's E (retreat and dash phases) movement.", "Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] can interrupt Galio's W (taunt) and R (channeling)."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
