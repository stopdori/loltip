// app/data/matchups/anivia/anivia_rell.ts
import type { MatchupSummary } from "../_types";

export const anivia_rell: MatchupSummary = {
  champs: ["anivia", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 렐 W(붕괴)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 렐 W(붕괴)의 [[DASH]]을 끊을 수 있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 렐 W(탑승)의 [[GRAB]]에 끌려가는 아군의 이동을 끊을 수 있음. \n 즉, 구조가능 (이론상)."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Rell's W (Charge) [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Rell's W (Charge) [[DASH]].", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt an ally being pulled by Rell's W (Mounted) [[GRAB]]. \n (theoretically)"],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
