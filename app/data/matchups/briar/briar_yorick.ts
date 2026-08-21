// app/data/matchups/briar/briar_yorick.ts
import type { MatchupSummary } from "../_types";

export const briar_yorick: MatchupSummary = {
  champs: ["briar", "yorick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 요릭 W의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 요릭 W의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Yorick's W [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Yorick's W [[AIRBORNE]]."],
    },
    yorick: {
      ko: [],
      en: [],
    },
  },
};
