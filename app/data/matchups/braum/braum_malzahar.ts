// app/data/matchups/braum/braum_malzahar.ts
import type { MatchupSummary } from "../_types";

export const braum_malzahar: MatchupSummary = {
  champs: ["braum", "malzahar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 말자하 평타, Q, W(최초 1대)를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 말자하 Q는 말자하 방향이 아닌 Q가 생성되는 방향(즉 직각방향)을 바라봐야 적용.", "브라움 E(방패)로 말자하 평타를 [[INTERCEPT_PROJECTILE]] 할 수 있음.", "브라움 P의 [[STUN]]로 말자하 R을 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 말자하 R을 끊을 수 있음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Malzahar's basic attacks, Q, and W (first hit).\nNote: For Malzahar's Q, Braum must face the direction the Q spawns (perpendicular to Malzahar), not the direction Malzahar is facing.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Malzahar's basic attacks.","Braum's P [[STUN]] cannot interrupt Malzahar's R. Note: [[STUN]] still applies","Braum's R [[AIRBORNE]] can interrupt Malzahar's R"],
    },
    malzahar: {
      ko: ["말자하 P의 [[CC_IMMUNE]]으로 브라움 P의 [[STUN]], R의 [[AIRBORNE]]에 걸리지 않음.", "말자하 Q의 [[SILENCE]]으로 브라움 W 이동을 끊을 수 없음.", "말자하 R의 [[SUPPRESS]]으로 브라움 W 이동을 끊을 수 있음.", "말자하 Q의 [[SILENCE]], R의 [[SUPPRESS]]으로 브라움 R(시전 집중)을 끊을 수 없음."],
      en: ["Malzahar's P [[CC_IMMUNE]] prevents Braum's P [[STUN]] and R [[AIRBORNE]] from affecting him.","Malzahar's Q [[SILENCE]] cannot interrupt Braum's W movement.","Malzahar's R [[SUPPRESS]] can interrupt Braum's W movement.","Malzahar's Q [[SILENCE]] and R [[SUPPRESS]] cannot interrupt Braum's R (channel)."],
    },
  },
};
