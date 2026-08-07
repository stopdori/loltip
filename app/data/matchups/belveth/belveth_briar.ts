// app/data/matchups/belveth/belveth_briar.ts
import type { MatchupSummary } from "../_types";

export const belveth_briar: MatchupSummary = {
  champs: ["belveth", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 브라이어 Q, W의 [[DASH]]을 끊을 수 있음.", 
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 브라이어 Q의 [[STUN]], R의 [[FEAR]]로 끊기지 않음. \n 단, [[STUN]], [[FEAR]]는 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Briar's Q and W [[DASH]].",
        "Bel'Veth's R has instant cast and [[TIMING_AFTERCAST]], so it cannot be interrupted by Briar's Q [[STUN]] or R [[FEAR]]. \n However, the [[STUN]] and [[FEAR]] still apply."],
    },
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 벨베스 Q, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "브라이어 E의 [[KNOCKBACK]], R2의 [[FEAR]]로 벨베스 Q의 [[DASH]]을 끊을 수 있음. \n 단, 벨베스 R의 [[DASH]]은 끊을 수 없음.",
        "브라이어 E의 [[CAST_COMMIT]]으로 벨베스 W의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.",
        "브라이어 R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 벨베스 W의 [[AIRBORNE]]을 무시할 수 있음.",
        "브라이어 R2의 [[HOMING]] [[DASH]]으로 벨베스 Q, R의 [[DASH]]을 따라갈 수 있음."],
      en: ["Briar's Q [[STUN]] cannot interrupt Bel'Veth's Q and R [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R2 [[FEAR]] can interrupt Bel'Veth's Q [[DASH]]. \n However, they cannot interrupt Bel'Veth's R [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Bel'Veth's W [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Bel'Veth's W [[AIRBORNE]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Bel'Veth's Q and R [[DASH]]."],
    },
  },
};
