// app/data/matchups/anivia/anivia_blitzcrank.ts
import type { MatchupSummary } from "../_types";

export const anivia_blitzcrank: MatchupSummary = {
  champs: ["anivia", "blitzcrank"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 블랭(블츠)(블크) Q의 [[GRAB]]에 끌려가는 아군의 이동을 끊을 수 있음. \n 즉, 구조가능 (이론상)."],
      en: ["Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt an ally being pulled by Blitzcrank's Q [[GRAB]], effectively rescuing them. \n (theoretically)"],
    },
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Blitzcrank's Q [[GRAB]], E [[AIRBORNE]], and R [[SILENCE]] can interrupt Anivia's R [[SKILL_CHANNEL]]."],
    },
  },
};
