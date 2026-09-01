// app/data/matchups/malphite/malphite_renata.ts
import type { MatchupSummary } from "../_types";

export const malphite_renata: MatchupSummary = {
  champs: ["malphite", "renata"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 레나타 글라스크 Q1의 [[ROOT]], Q2의 [[STUN]], R의 [[BERSERK]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]], [[STUN]], [[BERSERK]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Renata Glasc's Q1 [[ROOT]], Q2 [[STUN]], and R [[BERSERK]]. \n However, [[ROOT]], [[STUN]], and [[BERSERK]] remain after [[UNSTOPPABLE]] ends."],
    },
    renata: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["말파이트 R의 [[UNSTOPPABLE]] [[DASH]] 중일 때, 레나타 글라스크 Q1을 맞히면 \n [[DASH]] 종료 후 [[ROOT]]과 [[TETHER]]이 남아있고, 레나타 글라스크가 Q2를 사용할 수 있음. [[CLIP:https://www.youtube.com/shorts/m9MIU-vmjKM]]"],
    en: ["While Malphite's R [[UNSTOPPABLE]] [[DASH]] is active, if hit by Renata Glasc's Q1, \n [[ROOT]] and [[TETHER]] remain after the [[DASH]] ends, and Renata Glasc can use Q2. [[CLIP:https://www.youtube.com/shorts/m9MIU-vmjKM]]"],
  },
};
