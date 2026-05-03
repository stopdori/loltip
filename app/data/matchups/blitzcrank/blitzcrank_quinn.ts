// app/data/matchups/blitzcrank/blitzcrank_quinn.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_quinn: MatchupSummary = {
  champs: ["blitzcrank", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 퀸 E의 [[DASH]]을 끊을 수 있음.", 
        "블리츠크랭크 R의 [[SILENCE]]으로 퀸 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음.", 
        "블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]으로 퀸 R의 [[SKILL_CHANNEL]], [[TRANSFORM]]을 끊을 수 있음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Quinn's E [[DASH]].",
        "Blitzcrank's R [[SILENCE]] cannot interrupt Quinn's E [[DASH]]. \n However, the [[SILENCE]] still applies.",
        "Blitzcrank's Q [[GRAB]], E [[AIRBORNE]], and R [[SILENCE]] can interrupt Quinn's R [[SKILL_CHANNEL]] and [[TRANSFORM]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
