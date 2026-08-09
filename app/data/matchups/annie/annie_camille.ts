// app/data/matchups/annie/annie_camille.ts
import type { MatchupSummary } from "../_types";

export const annie_camille: MatchupSummary = {
  champs: ["annie", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 카밀 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 투척단계에서 대기단계로 될때까지 [[STUN]]이 남아있다면 E 해제."],
      en: ["P [[STUN]] cannot interrupt Camille's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, if the [[STUN]] persists until the throw phase transitions to the waiting phase, E is cancelled."],
    },
    camille: {
      ko: [],
      en: [],
    },
  },
};
