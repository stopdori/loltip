// app/data/matchups/anivia/anivia_jayce.ts
import type { MatchupSummary } from "../_types";

export const anivia_jayce: MatchupSummary = {
  champs: ["anivia", "jayce"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 제이스 해머폼 Q의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 제이스 해머폼 Q의 이동을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Jayce's Hammer Form Q movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Jayce's Hammer Form Q movement."],
    },
    jayce: {
      ko: [],
      en: [],
    },
  },
};
