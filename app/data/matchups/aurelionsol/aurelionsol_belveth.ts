// app/data/matchups/aurelionsol/aurelionsol_belveth.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_belveth: MatchupSummary = {
  champs: ["aurelionsol", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 벨베스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 벨베스 Q의 [[DASH]]을 끊을 수 있음.", 
        "아우렐리온 솔 R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt Bel'Veth's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt Bel'Veth's Q [[DASH]].",
        "Aurelion Sol's R [[STUN]] and R (Falling Star) [[AIRBORNE]] can interrupt Bel'Veth's E [[SKILL_CHANNEL]]."],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 아우렐리온 솔 Q, W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 아우렐리온 솔 R의 [[STUN]], [[EMPOWERED]] R의 [[AIRBORNE]]으로 끊기지 않음. \n 단, [[STUN]], [[AIRBORNE]]은 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Aurelion Sol's Q and W [[SKILL_CHANNEL]].",
        "Bel'Veth's R is instant with [[TIMING_AFTERCAST]], so it cannot be interrupted by Aurelion Sol's R [[STUN]] or [[EMPOWERED]] R [[AIRBORNE]]. \n However, [[STUN]] and [[AIRBORNE]] still apply."],
    },
  },
};
