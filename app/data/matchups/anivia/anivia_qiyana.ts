// app/data/matchups/anivia/anivia_qiyana.ts
import type { MatchupSummary } from "../_types";

export const anivia_qiyana: MatchupSummary = {
  champs: ["anivia", "qiyana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 키아나 W, E의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 키아나 W, E의 이동을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Qiyana's W or E movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Qiyana's W or E movement."],
    },
    qiyana: {
      ko: [],
      en: [],
    },
  },
};
