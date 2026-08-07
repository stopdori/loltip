// app/data/matchups/blitzcrank/blitzcrank_briar.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_briar: MatchupSummary = {
  champs: ["blitzcrank", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 브라이어 Q, W의 [[DASH]]을 끊을 수 있음.", 
        "블리츠크랭크 R의 [[SILENCE]]으로 브라이어 Q, W의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Briar's Q and W [[DASH]].",
        "Blitzcrank's R [[SILENCE]] cannot interrupt Briar's Q and W [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    briar: {
      ko: ["브라이어 E의 [[CAST_COMMIT]]으로 블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]에 걸려도 시전을 유지할 수 있음.",
        "브라이어 R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Blitzcrank's Q [[GRAB]], E [[AIRBORNE]], or R [[SILENCE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Blitzcrank's Q [[GRAB]], E [[AIRBORNE]], and R [[SILENCE]]."],
    },
  },
};
