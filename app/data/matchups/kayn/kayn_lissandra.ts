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
      ko: ["W의 [[ROOT]]으로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "W의 [[ROOT]], R의 [[STUN]]로 (케인 / 그암 / 다르킨) E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 있음. [[EXIST]] \n 단, Q의 돌진 단계에 맞히면, 베기 단계가 발동하지 않음.", 
        "다르킨 W의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "W [[ROOT]] and R [[STUN]] can interrupt (Kayn / Shadow Assassin / Darkin) E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[EXIST]] \n However, if it hits during Q's dash phase, the slash phase does not activate.", 
        "When hit by Darkin W [[AIRBORNE]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
