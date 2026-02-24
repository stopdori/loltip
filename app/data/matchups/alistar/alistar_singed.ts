// app/data/matchups/alistar/alistar_singed.ts
import type { MatchupSummary } from "../_types";

export const alistar_singed: MatchupSummary = {
  champs: ["alistar", "singed"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 R의 [[CC_CLEANSE]]로 신지드 E의 [[GRAB]], W에 사용한 E의[[GRAB]] [[ROOT]]을 해제할 수 있음"],
      en: [""],
    },
    singed: {
      ko: ["신지드 W로 알리스타 W를 사용할 수 없게 만들 수 있음", "신지드 E와 알리스타 W가 부딪히면 알리스타 W도 유효하고 신지드 E도 유효함"],
      en: [],
    },
  },
};
