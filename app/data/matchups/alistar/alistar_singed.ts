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
      ko: ["알리스타 R의 [[CC_CLEANSE]]로 신지드 WE의 [[ROOT]], E의 [[GRAB]]을 해제할 수 있음.",
        "알리스타 R의 [[CC_CLEANSE]]로 신지드 W의 지속[[SLOW]], 지속[[GROUNDED]]는 해제해도 다시 걸림."
      ],
      en: ["Alistar's R [[CC_CLEANSE]] can cleanse Singed's WE [[ROOT]] and E [[GRAB]].", "Singed's W persistent [[SLOW]] and [[GROUNDED]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]]."],
    },
    singed: {
      ko: ["신지드 W로 알리스타 W를 사용할 수 없게 만들 수 있음", "신지드 E와 알리스타 W가 부딪히면 알리스타 W도 유효하고 신지드 E도 유효함"],
      en: ["Singed's W can prevent Alistar from using W", "When Singed's E and Alistar's W collide, both Alistar's W and Singed's E remain valid"],
    },
  },
};
