// app/data/matchups/alistar/alistar_samira.ts
import type { MatchupSummary } from "../_types";

export const alistar_samira: MatchupSummary = {
  champs: ["alistar", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 사미라 E의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 사미라 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 사미라 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 사미라 P의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Samira's E [[DASH]].", "Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Samira's R [[SKILL_CHANNEL]].", "E [[STUN]] cannot interrupt Samira's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Samira's P [[AIRBORNE]]."],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
