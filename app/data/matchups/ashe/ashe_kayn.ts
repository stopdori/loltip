// app/data/matchups/ashe/ashe_kayn.ts
import type { MatchupSummary } from "../_types";

export const ashe_kayn: MatchupSummary = {
  champs: ["ashe", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["R의 [[STUN]]로 케인 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[STUN]]로 케인 E(벽이동)의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Kayn's Q [[DASH]]. \n However, the [[STUN]] still applies.", "R [[STUN]] can interrupt Kayn's E (Wall Travel) [[SKILL_CHANNEL]]."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
