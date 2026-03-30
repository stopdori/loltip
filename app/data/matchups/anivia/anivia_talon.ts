// app/data/matchups/anivia/anivia_talon.ts
import type { MatchupSummary } from "../_types";

export const anivia_talon: MatchupSummary = {
  champs: ["anivia", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 탈론 Q(돌진), E(벽 넘기)의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 탈론 Q(돌진), E(벽 넘기)의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Talon's Q (dash) or E (wall hop) [[DASH]]. However, the [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Talon's Q (dash) and E (wall hop) [[DASH]]."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
