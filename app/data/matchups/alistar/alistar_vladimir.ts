// app/data/matchups/alistar/alistar_vladimir.ts
import type { MatchupSummary } from "../_types";

export const alistar_vladimir: MatchupSummary = {
  champs: ["alistar", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 블라디 E의 [[SKILL_CHARGED]]을 끊을 수 있음. \n 단, 끊길 때 모았던 만큼의 [[SKILL_CHARGED]]은 발사.", 
        "R의 [[CC_CLEANSE]]로 블라디 E의 [[SLOW]]를 해제할 수 있음.", "R의 [[CC_CLEANSE]]로 블라디 W의 지속[[SLOW]]는 해제해도 다시 걸림.", "R의 [[CC_CLEANSE]]로 블라디 R을 해제할 수 없음. R은 [[DEBUFF]]."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Vladimir's E [[SKILL_CHARGED]]. \n However, Vladimir's E is not cancelled — it fires up to its charged amount.", "R [[CC_CLEANSE]] can cleanse Vladimir's E [[SLOW]].", "Vladimir's W persistent [[SLOW]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]].", "R [[CC_CLEANSE]] cannot cleanse Vladimir's R — it applies as a [[DEBUFF]]."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
