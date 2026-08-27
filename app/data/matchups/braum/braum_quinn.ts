// app/data/matchups/braum/braum_quinn.ts
import type { MatchupSummary } from "../_types";

export const braum_quinn: MatchupSummary = {
  champs: ["braum", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 퀸 평타, P(평타), Q, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 퀸 E의 [[SLOW]], [[KNOCKBACK]]은 남아있음.", 
        "브라움 E(방패)로 퀸 평타, P(평타), Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 퀸 Q의 [[NEAR_SIGHT]]는 남아있음.", 
        "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 퀸 R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 해제시킬 수 있음."],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Quinn's basic attacks, P (basic attack), Q, E, and R.\nNote: Quinn's E [[SLOW]] and [[KNOCKBACK]] still apply.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Quinn's basic attacks, P (basic attack), and Q.\nNote: Quinn's Q [[NEAR_SIGHT]] still applies.","Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Quinn's R [[SKILL_CHANNEL]] and [[TRANSFORM]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
