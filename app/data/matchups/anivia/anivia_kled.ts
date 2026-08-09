// app/data/matchups/anivia/anivia_kled.ts
import type { MatchupSummary } from "../_types";

export const anivia_kled: MatchupSummary = {
  champs: ["anivia", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 클레드 승마폼 Q의 [[GRAB]]에 끌려가는 아군의 이동을 끊을 수 있음. \n 즉, 구조가능 (이론상)."],
      en: ["Q [[STUN]] cannot interrupt Kled's mounted E or dismounted Q [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Kled's mounted E or dismounted Q [[DASH]].", "W [[TERRAIN]] [[AIRBORNE]] can interrupt an ally being pulled by Kled's mounted Q [[GRAB]]. \n (theoretically)"],
    },
    kled: {
      ko: [],
      en: [],
    },
  },
};
