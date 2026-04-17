// app/data/matchups/anivia/anivia_tristana.ts
import type { MatchupSummary } from "../_types";

export const anivia_tristana: MatchupSummary = {
  champs: ["anivia", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 트리스타나 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 트리스타나 W의 [[DASH]]을 끊을 수 있음.",
      "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 트리스타나 R의 [[KNOCKBACK]]에 밀려나는 아군의 이동을 끊을 수 있음. \n 즉, 전장이탈 막기 가능 (이론상)."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Tristana's W [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Tristana's W [[DASH]].", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt an ally being knocked back by Tristana's R [[KNOCKBACK]]. \n (theoretically)"],
    },
    tristana: {
      ko: [],
      en: [],
    },
  },
};
