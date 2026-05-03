// app/data/matchups/bard/bard_belveth.ts
import type { MatchupSummary } from "../_types";

export const bard_belveth: MatchupSummary = {
  champs: ["bard", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 벨베스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 Q의 [[STUN]], R(존야)로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "바드 R(존야)로 벨베스 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Bard's Q [[STUN]] cannot interrupt Bel'Veth's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "Bard's Q [[STUN]] and R (Zhonya) can interrupt Bel'Veth's E [[SKILL_CHANNEL]].",
        "Bard's R (Zhonya) can interrupt Bel'Veth's R [[DASH]]."],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 바드 E(벽이동)의 [[DASH]]을 끊을 수 있음.",
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 바드 Q의 [[STUN]], R(존야)로 끊기지 않음. \n 단, [[STUN]]], 존야는 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Bard's E (wall-travel) [[DASH]].",
        "Bel'Veth's R is instant with [[TIMING_AFTERCAST]], so it cannot be interrupted by Bard's Q [[STUN]] or R (Zhonya). \n However, [[STUN]] and Zhonya still apply."],
    },
  },
};
