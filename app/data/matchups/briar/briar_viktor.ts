// app/data/matchups/briar/briar_viktor.ts
import type { MatchupSummary } from "../_types";

export const briar_viktor: MatchupSummary = {
  champs: ["briar", "viktor"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 빅토르 W의 [[STUN]], R의 [[DISRUPT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 빅토르 W의 [[STUN]], R의 [[DISRUPT]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Viktor's W [[STUN]], R [[DISRUPT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Viktor's W [[STUN]], R [[DISRUPT]]."],
    },
    viktor: {
      ko: [],
      en: [],
    },
  },
};
