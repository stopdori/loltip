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
      ko: ["Q의 [[STUN]]로 다이애나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 다이애나 E의 [[DASH]]을 끊을 수 있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 다이애나 R의 [[GRAB]]에 끌려가는 아군의 이동을 끊을 수 있음. \n 즉, 구조가능 (이론상)."],
      en: ["Q [[STUN]] cannot interrupt Diana's E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Diana's E [[DASH]].", "W [[TERRAIN]] [[AIRBORNE]] can interrupt an ally being pulled by Diana's R [[GRAB]]. \n (theoretically)"],
    },
    diana: {
      ko: ["R의 [[GRAB]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Anivia's R [[SKILL_CHANNEL]]."],
    },
  },
};
