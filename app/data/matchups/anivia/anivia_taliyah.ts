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
      ko: ["Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 탈리야 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 탈리야 W의 [[AIRBORNE]]에 끌려가는 아군의 이동을 끊을 수 있음. \n 즉, 구조가능 (이론상)."],
      en: ["Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Taliyah's R [[SKILL_CHANNEL]].", "W [[TERRAIN]] [[AIRBORNE]] can interrupt an ally being pulled by Taliyah's W [[AIRBORNE]]. \n (theoretically)"],
    },
    taliyah: {
      ko: [],
      en: [],
    },
  },
};
