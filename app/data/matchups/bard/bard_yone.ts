// app/data/matchups/bard/bard_yone.ts
import type { MatchupSummary } from "../_types";

export const bard_yone: MatchupSummary = {
  champs: ["bard", "yone"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 요네 Q3, E1의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 요네 Q3, E1의 [[DASH]]을 끊을 수 있음. \n 단, Q3의 [[AIRBORNE]]은 정상적으로 작동.", 
        "바드 R(존야)로 요네 R을 사용 중일 때 맞혀도 정상적으로 발동함. \n 단, 존야 상태는 남아있음."],
      en: [""],
    },
    yone: {
      ko: ["요네 E2의 [[UNSTOPPABLE]] [[DASH]]으로 바드 R(존야)을 무시할 수 있음."],
      en: [],
    },
  },
};
