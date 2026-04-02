// app/data/matchups/anivia/anivia_belveth.ts
import type { MatchupSummary } from "../_types";

export const anivia_belveth: MatchupSummary = {
  champs: ["anivia", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 벨베스 Q, R의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 벨베스 R의 [[DASH]]을 끊을 수 없음. 단, Q의 [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 벨베스 Q의 [[DASH]]을 끊을 수 있음.", "애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 벨베스 E([[SKILL_CHANNEL]])를 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Bel'Veth's Q or R movement. However, [[STUN]] still applies.", "Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] cannot interrupt Bel'Veth's R movement. However, Q [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Bel'Veth's Q movement.", "Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] can interrupt Bel'Veth's E ([[SKILL_CHANNEL]])."],
    },
    belveth: {
      ko: [],
      en: [],
    },
  },
};
