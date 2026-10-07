// app/data/matchups/fiddlesticks/fiddlesticks_kayn.ts
import type { MatchupSummary } from "../_types";

export const fiddlesticks_kayn: MatchupSummary = {
  champs: ["fiddlesticks", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fiddlesticks: {
      ko: ["Q(패시브, 액티브)의 [[FEAR]] / E의 [[SILENCE]]으로 (케인 / 그암 / 다르킨) Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[FEAR]], [[SILENCE]]은 남아있음.", 
        "Q(패시브, 액티브)의 [[FEAR]]로 (케인 / 그암 / 다르킨) E(일반, 벽 이동)의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]"],
      en: ["Q (passive, active) [[FEAR]] / E [[SILENCE]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q [[DASH]]. [[NOT_EXIST]] \n However, the [[FEAR]] and [[SILENCE]] still apply.", 
        "Q (passive, active) [[FEAR]] can interrupt (Kayn / Shadow Assassin / Darkin) E (normal, wall travel) [[IGNORE_TERRAIN]]. [[EXIST]]"],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
