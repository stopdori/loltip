// app/data/matchups/briar/briar_zyra.ts
import type { MatchupSummary } from "../_types";

export const briar_zyra: MatchupSummary = {
  champs: ["briar", "zyra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 자이라 E의 [[ROOT]], R의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 자이라 E의 [[ROOT]], R의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Zyra's E [[ROOT]], R [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Zyra's E [[ROOT]], R [[AIRBORNE]]."],
    },
    zyra: {
      ko: [],
      en: [],
    },
  },
};
