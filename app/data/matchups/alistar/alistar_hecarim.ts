// app/data/matchups/alistar/alistar_hecarim.ts
import type { MatchupSummary } from "../_types";

export const alistar_hecarim: MatchupSummary = {
  champs: ["alistar", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 헤카림 E의 [[DASH]]을 끊을 수 있음.", 
         "R의 [[CC_CLEANSE]]로 헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Hecarim's E [[DASH]].", "R [[CC_CLEANSE]] can cleanse Hecarim's E [[KNOCKBACK]] and R [[FEAR]]."],
    },
    hecarim: {
      ko: [],
      en: [],
    },
  },
};
