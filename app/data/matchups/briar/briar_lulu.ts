// app/data/matchups/briar/briar_lulu.ts
import type { MatchupSummary } from "../_types";

export const briar_lulu: MatchupSummary = {
  champs: ["briar", "lulu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 룰루 W의 [[POLYMORPH]], R의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 룰루 W의 [[POLYMORPH]], R의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Lulu's W [[POLYMORPH]] or R [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Lulu's W [[POLYMORPH]] and R [[AIRBORNE]]."],
    },
    lulu: {
      ko: [],
      en: [],
    },
  },
};
