// app/data/matchups/briar/briar_hwei.ts
import type { MatchupSummary } from "../_types";

export const briar_hwei: MatchupSummary = {
  champs: ["briar", "hwei"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 흐웨이 EQ의 [[FEAR]], EW의 [[ROOT]], EE의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 흐웨이EQ의 [[FEAR]], EW의 [[ROOT]], EE의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Hwei's EQ [[FEAR]], EW [[ROOT]], or EE [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Hwei's EQ [[FEAR]], EW [[ROOT]], and EE [[AIRBORNE]]."],
    },
    hwei: {
      ko: [],
      en: [],
    },
  },
};
