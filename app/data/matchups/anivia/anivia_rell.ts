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
      ko: ["애니비아 Q의 [[STUN]]로 렐 승마폼 W(붕괴)의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 렐 승마폼 W(붕괴)의 이동을 끊을 수 있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 렐 중갑폼 W(평타)의 [[GRAB]]에 끌려가는 아군의 이동을 끊을 수 있긴 함."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Rell's mounted W (charge) movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Rell's mounted W (charge) movement.", "Anivia's W (wall) [[AIRBORNE]] can interrupt an ally being pulled by Rell's armored W (auto-attack) [[GRAB]]."],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
