// app/data/matchups/kayn/kayn_lissandra.ts
import type { MatchupSummary } from "../_types";

export const kayn_lissandra: MatchupSummary = {
  champs: ["kayn", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kayn: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 케인, 그암, 다르킨 Q(돌진 단계)의 [[DASH]] / E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 케인, 그암, 다르킨 Q(돌진 단계)의 [[DASH]] / E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. [[EXIST]] \n 단, Q의 돌진 단계에 맞히면, 베기 단계가 발동하지 않음. \n 단, E는 즉시 벽에서 가장 가까운 땅으로 이동.", 
      "다르킨 W의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
