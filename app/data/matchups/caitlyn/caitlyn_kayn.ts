// app/data/matchups/caitlyn/caitlyn_kayn.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_kayn: MatchupSummary = {
  champs: ["caitlyn", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 (케인 / 그암 / 다르킨) E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]",

      "활성화된 W([[TRAP]])의 [[ROOT]]으로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Activated W ([[TRAP]]) [[ROOT]] can interrupt (Kayn / Shadow Assassin / Darkin) E [[IGNORE_TERRAIN]]. [[EXIST]]",
        "W ([[TRAP]]) [[ROOT]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] and headshot still apply."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
