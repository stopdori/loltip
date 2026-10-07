// app/data/matchups/kayn/kayn_rakan.ts
import type { MatchupSummary } from "../_types";

export const kayn_rakan: MatchupSummary = {
  champs: ["kayn", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kayn: {
      ko: [""],
      en: [""],
    },
    rakan: {
      ko: ["R의 [[CHARM]]으로 (케인 / 그암 / 다르킨) Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음. \n 단, 회전 단계까지 문제없이 시전.", 
        "R의 [[CHARM]]으로 (케인 / 그암 / 다르킨) E(일반, 벽이동)의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]"],
      en: ["R [[CHARM]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies. \n The spin phase still casts normally.", 
        "R [[CHARM]] can interrupt (Kayn / Shadow Assassin / Darkin) E (normal, wall travel) [[IGNORE_TERRAIN]]. [[EXIST]]"],
    },
  },
};
