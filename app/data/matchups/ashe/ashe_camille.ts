// app/data/matchups/ashe/ashe_camille.ts
import type { MatchupSummary } from "../_types";

export const ashe_camille: MatchupSummary = {
  champs: ["ashe", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["애쉬 R의 [[STUN]]로 카밀 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 카밀 E의 대기 단계에 [[STUN]]이 남아 있으면, 돌진 단계를 사용할 수 없음."],
      en: ["Ashe's R [[STUN]] cannot interrupt Camille's E [[DASH]]. \n However, the [[STUN]] still applies. \n If the [[STUN]] remains during Camille's E hook phase, she cannot use the dash phase."],
    },
    camille: {
      ko: [],
      en: [],
    },
  },
};
