// app/data/matchups/briar/briar_jinx.ts
import type { MatchupSummary } from "../_types";

export const briar_jinx: MatchupSummary = {
  champs: ["briar", "jinx"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 징크스 E의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 징크스 E의 [[ROOT]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Jinx's E [[ROOT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Jinx's E [[ROOT]]."],
    },
    jinx: {
      ko: [],
      en: [],
    },
  },
};
