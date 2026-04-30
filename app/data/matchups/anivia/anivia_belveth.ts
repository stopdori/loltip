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
      ko: ["애니비아 Q의 [[STUN]]로 벨베스 Q, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 벨베스 Q의 [[DASH]]을 끊을 수 있음.",
        "애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Bel'Veth's Q or R [[DASH]]. \n However, the [[STUN]] still applies.",
        "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Bel'Veth's Q [[DASH]].",
        "Anivia's Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Bel'Veth's E [[SKILL_CHANNEL]]."],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 애니비아 Q의 [[STUN]]로 끊기지 않음. \n 단, [[STUN]]은 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Anivia's R [[SKILL_CHANNEL]].",
        "Bel'Veth's R has instant cast and [[TIMING_AFTERCAST]], so it cannot be interrupted by Anivia's Q [[STUN]]. \n However, the [[STUN]] effect still applies."],
    },
  },
};
