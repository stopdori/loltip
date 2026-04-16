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
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 사미라 E의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 사미라 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 사미라 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 사미라 P의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Samira's E [[DASH]].", "Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Samira's R [[SKILL_CHANNEL]].", "Alistar's E [[STUN]] cannot interrupt Samira's E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Samira's P [[AIRBORNE]]."],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
