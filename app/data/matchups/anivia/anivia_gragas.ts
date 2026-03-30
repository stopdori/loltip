// app/data/matchups/anivia/anivia_gragas.ts
import type { MatchupSummary } from "../_types";

export const anivia_gragas: MatchupSummary = {
  champs: ["anivia", "gragas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 그라가스 E(배치기)의 [[DASH]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 그라가스 E(배치기)의 [[DASH]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Gragas's E (body slam) movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Gragas's E (body slam) movement."],
    },
    gragas: {
      ko: [],
      en: [],
    },
  },
};
