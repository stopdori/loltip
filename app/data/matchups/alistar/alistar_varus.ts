// app/data/matchups/alistar/alistar_varus.ts
import type { MatchupSummary } from "../_types";

export const alistar_varus: MatchupSummary = {
  champs: ["alistar", "varus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 바루스 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 바루스 R의 [[ROOT]]를 해제할 수 있음.", "R의 [[CC_CLEANSE]]로 바루스 E의 지속[[SLOW]]를 해제해도 다시 걸림."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Varus's Q [[SKILL_CHARGED]].", "R [[CC_CLEANSE]] can cleanse Varus's R [[ROOT]].", "Varus's E persistent [[SLOW]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]]."],
    },
    varus: {
      ko: [],
      en: [],
    },
  },
};
