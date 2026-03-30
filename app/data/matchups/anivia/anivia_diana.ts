// app/data/matchups/anivia/anivia_diana.ts
import type { MatchupSummary } from "../_types";

export const anivia_diana: MatchupSummary = {
  champs: ["anivia", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 다이애나 E의 [[DASH]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 다이애나 E의 [[DASH]을 끊을 수 있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 다이애나 R의 [[GRAB]]에 끌려가는 아군의 이동을 끊을 수 있긴 함."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Diana's E movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Diana's E movement.", "Anivia's W (wall) [[AIRBORNE]] can interrupt an ally being pulled by Diana's R [[GRAB]]."],
    },
    diana: {
      ko: [],
      en: [],
    },
  },
};
