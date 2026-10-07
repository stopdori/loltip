// app/data/matchups/brand/brand_kayn.ts
import type { MatchupSummary } from "../_types";

export const brand_kayn: MatchupSummary = {
  champs: ["brand", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["Q의 [[STUN]]로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]]", 
        
        "Q의 [[STUN]]로 (케인 / 그암 / 다르킨) E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]"],
      en: ["Q [[STUN]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[NOT_EXIST]]", 
        "Q [[STUN]] can interrupt (Kayn / Shadow Assassin / Darkin) E [[IGNORE_TERRAIN]]. [[EXIST]]"],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
