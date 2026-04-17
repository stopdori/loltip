// app/data/matchups/anivia/anivia_thresh.ts
import type { MatchupSummary } from "../_types";

export const anivia_thresh: MatchupSummary = {
  champs: ["anivia", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 쓰레쉬 Q2, W(랜턴)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 쓰레쉬 Q2, W(랜턴)의 [[DASH]]을 끊을 수 있음.", 
      "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 탈리야 W, R의 [[AIRBORNE]]에 끌려가는 아군의 이동을 끊을 수 있음. \n 즉, 구조가능 (이론상)."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Thresh's Q2 or W (lantern) [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Thresh's Q2 or W (lantern) [[DASH]].", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt an ally being pulled by Taliyah's W or R [[AIRBORNE]]. \n (theoretically)"],
    },
    thresh: {
      ko: [],
      en: [],
    },
  },
};
