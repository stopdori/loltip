// app/data/matchups/aurelionsol/aurelionsol_gwen.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_gwen: MatchupSummary = {
  champs: ["aurelionsol", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 그웬 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 그웬 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt Gwen's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt Gwen's E [[DASH]]."],
    },
    gwen: {
      ko: ["그웬 W(그면상)의 [[UNTARGETABLE]]로 아우렐리온 솔 평타, Q, E, R, R(천상강림)을 범위 밖에서 맞지 않음. \n 단, [[EMPOWERED]] R(천상강림)의 충격파도 맞지 않음."],
      en: ["Gwen's W (Hallowed Mist) [[UNTARGETABLE]] prevents Aurelion Sol's basic attacks, Q, E, R, and R (Falling Star) from hitting when outside the zone. \n The [[EMPOWERED]] R (Falling Star) shockwave also does not hit."],
    },
  },
};
