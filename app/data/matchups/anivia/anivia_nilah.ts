// app/data/matchups/anivia/anivia_nilah.ts
import type { MatchupSummary } from "../_types";

export const anivia_nilah: MatchupSummary = {
  champs: ["anivia", "nilah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 닐라 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 닐라 E의 [[DASH]]을 끊을 수 있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 닐라 R의 [[GRAB]]에 끌려가는 아군의 이동을 끊을 수 있음. \n 즉, 구조가능 (이론상)."],
      en: ["Q [[STUN]] cannot interrupt Nilah's E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Nilah's E [[DASH]].", "W [[TERRAIN]] [[AIRBORNE]] can interrupt an ally being pulled by Nilah's R [[GRAB]]. \n (theoretically)"],
    },
    nilah: {
      ko: [],
      en: [],
    },
  },
};
