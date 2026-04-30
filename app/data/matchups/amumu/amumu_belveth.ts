// app/data/matchups/amumu/amumu_belveth.ts
import type { MatchupSummary } from "../_types";

export const amumu_belveth: MatchupSummary = {
  champs: ["amumu", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 벨베스 Q, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 벨베스 Q, R의 [[DASH]]을 따라갈 수 있음.",
        "아무무 R의 [[STUN]]로 벨베스 Q의 [[DASH]]을 끊을 수 있음.",
        "아무무 Q, R의 [[STUN]]로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "아무무 Q의 [[CC_BUFFER]]로 벨베스 W의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Bel'Veth's Q and R [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Bel'Veth's Q and R [[DASH]].",
        "Amumu's R [[STUN]] can interrupt Bel'Veth's Q [[DASH]].",
        "Amumu's Q and R [[STUN]] can interrupt Bel'Veth's E [[SKILL_CHANNEL]].",
        "Amumu's Q [[CC_BUFFER]] can ignore Bel'Veth's W [[AIRBORNE]] and continue [[DASH]]."],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 아무무 Q의 [[DASH]]을 끊을 수 있음.",
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 아무무 Q, R의 [[STUN]]로 끊기지 않음. \n 단, [[STUN]]은 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Amumu's Q [[DASH]].",
        "Bel'Veth's R has instant cast and [[TIMING_AFTERCAST]], so it cannot be interrupted by Amumu's Q or R [[STUN]]. \n However, the [[STUN]] effect still applies."],
    },
  },
};
