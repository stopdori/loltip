// app/data/matchups/aurora/aurora_blitzcrank.ts
import type { MatchupSummary } from "../_types";

export const aurora_blitzcrank: MatchupSummary = {
  champs: ["aurora", "blitzcrank"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]]로 블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]], [SILENCE]]은 남아있음. \n 단, Q의 [[GRAB]]으로 끌려가다가 [[DASH]] 발동.", 
        "오로라 R의 [[UNSTOPPABLE]] [[DASH]]으로 블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Aurora's E (ready phase) [[CC_BUFFER]] can ignore Blitzcrank's Q [[GRAB]], E [[AIRBORNE]], and R [[SILENCE]] and continue [[DASH]]ing. \n However, [[STUN]] and [[SILENCE]] still apply. \n However, the [[DASH]] activates while being pulled by Q [[GRAB]].",
        "Aurora's R [[UNSTOPPABLE]] [[DASH]] can ignore Blitzcrank's Q [[GRAB]], E [[AIRBORNE]], and R [[SILENCE]] and continue [[DASH]]ing."],
    },
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 오로라 W, E(후진단계)의 [[DASH]]을 끊을 수 있음.",
        "블리츠크랭크 R의 [[SILENCE]]으로 오로라 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Aurora's W and E (retreat phase) [[DASH]].",
        "Blitzcrank's R [[SILENCE]] cannot interrupt Aurora's W and E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
