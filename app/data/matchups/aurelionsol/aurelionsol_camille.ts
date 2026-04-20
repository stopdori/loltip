// app/data/matchups/aurelionsol/aurelionsol_camille.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_camille: MatchupSummary = {
  champs: ["aurelionsol", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 카밀 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 카밀 E의 대기 단계에 [[STUN]]이 남아 있으면, 돌진 단계를 사용할 수 없음.", 
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 카밀 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt Camille's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, if the [[STUN]] remains during Camille's E waiting phase, she cannot use the dash phase.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt Camille's E [[DASH]]."],
    },
    camille: {
      ko: [],
      en: [],
    },
  },
};
