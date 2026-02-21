// app/data/matchups/alistar/alistar_rammus.ts
import type { MatchupSummary } from "../_types";

export const alistar_rammus: MatchupSummary = {
  champs: ["alistar", "rammus"],
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W, E로 람머스 Q를 끊을 수 있음\n단, W는 대신 부딪혀주는 방법으로 끊는것", "알리스타 R의 [[CC_CLEANSE]]로 람머스 Q의 [[SLOW]], E의 [[TAUNT]], R의 [[SLOW]]를 해제할 수 있음"],
      en: [""],
    },
    rammus: {
      ko: ["람머스 Q와 알리스타 W가 부딪히면 람머스 Q는 유효 알리스타 W는 무효화\n그래서 알리스타는 람머스 Q에 WQ자체가 불가능"],
      en: [],
    },
  },
};
