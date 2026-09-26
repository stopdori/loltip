// app/data/matchups/lissandra/lissandra_mordekaiser.ts
import type { MatchupSummary } from "../_types";

export const lissandra_mordekaiser: MatchupSummary = {
  champs: ["lissandra", "mordekaiser"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["모데카이저 E의 [[GRAB]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    mordekaiser: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["리산드라 E1의 [[PROJECTILE]]를 발사하고 모데카이저 R([[BANISH]])에 당했을 때 \n E2를 사용할 수 있고, E2를 사용하면 협곡에 위치한 E1의 [[PROJECTILE]] 위치로 [[BLINK]]. ", 
      "E1의 [[PROJECTILE]]가 모데카이저 R(죽음의 세계) 범위를 넘어서 있을 때 E2로 [[BLINK]]하면, \n E1 [[PROJECTILE]]에 가장 가까운 [[ZONE]] 안쪽 가장자리로 [[BLINK]]."],
    en: [],
  },
};
