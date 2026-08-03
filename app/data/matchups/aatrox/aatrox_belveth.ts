// app/data/matchups/aatrox/aatrox_belveth.ts
import type { MatchupSummary } from "../_types";

export const aatrox_belveth: MatchupSummary = {
  champs: ["aatrox", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 벨베스 Q의 [[DASH]], W([[SKILL_CHANNEL]])를 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Bel'Veth's Q [[DASH]] and W [[SKILL_CHANNEL]]."],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음.",
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]으로 끊기지 않음. \n 단, 모든 CC는 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Aatrox's E [[DASH]].",
        "Bel'Veth's R has instant cast and [[TIMING_AFTERCAST]], so it cannot be interrupted by Aatrox's Q [[AIRBORNE]] or W [[GRAB]]. \n However, all CC effects still apply."],
    },
  },
};
