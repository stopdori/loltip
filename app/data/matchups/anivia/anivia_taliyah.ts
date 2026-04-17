// app/data/matchups/anivia/anivia_taliyah.ts
import type { MatchupSummary } from "../_types";

export const anivia_taliyah: MatchupSummary = {
  champs: ["anivia", "taliyah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 탈리야 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 탈리야 W의 [[AIRBORNE]]에 끌려가는 아군의 이동을 끊을 수 있음. \n 즉, 구조가능 (이론상)."],
      en: ["Anivia's Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Taliyah's R [[SKILL_CHANNEL]].", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt an ally being pulled by Taliyah's W [[AIRBORNE]]. \n (theoretically)"],
    },
    taliyah: {
      ko: [],
      en: [],
    },
  },
};
