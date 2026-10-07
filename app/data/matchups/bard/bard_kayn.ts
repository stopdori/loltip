// app/data/matchups/bard/bard_kayn.ts
import type { MatchupSummary } from "../_types";

export const bard_kayn: MatchupSummary = {
  champs: ["bard", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["Q의 [[STUN]]로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "Q의 [[STUN]]로 (케인 / 그암 / 다르킨) E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R(존야)로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]], E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]] \n 단, E의 [[IGNORE_TERRAIN]] 효과는 즉시 종료되어 벽에서 가장 가까운 땅으로 이동."],
      en: ["Q [[STUN]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[NOT_EXIST]] \n However, the [[STUN]] still applies.", 
        "Q [[STUN]] can interrupt (Kayn / Shadow Assassin / Darkin) E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R (Zhonya-like stasis) can interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]] and E [[IGNORE_TERRAIN]]. [[EXIST]] \n However, E's [[IGNORE_TERRAIN]] ends immediately and Kayn is moved to the nearest ground outside the wall."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
