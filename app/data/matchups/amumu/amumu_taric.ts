// app/data/matchups/amumu/amumu_taric.ts
import type { MatchupSummary } from "../_types";

export const amumu_taric: MatchupSummary = {
  champs: ["amumu", "taric"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q로 타릭 E의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지가 유효하고 E의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q is affected by Taric's E [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and E's [[STUN]] remains active."],
    },
    taric: {
      ko: [],
      en: [],
    },
  },
};
