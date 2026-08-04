// app/data/matchups/ambessa/ambessa_braum.ts
import type { MatchupSummary } from "../_types";

export const ambessa_braum: MatchupSummary = {
  champs: ["ambessa", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 브라움 W의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 브라움 P의 [[STUN]], R의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Braum's W [[DASH]].", "R [[UNSTOPPABLE]] can ignore Braum's P [[STUN]] and R [[AIRBORNE]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    braum: {
      ko: ["브라움 E(방패)로 암베사 평타, Q1, Q2, W, E를 막을([[DAMAGE_NULLIFY]]) 수 있음", "브라움 E(방패)로 암베사 R의 데미지를 막을 수 없음 (방향과 관계없이 불가)", "브라움 P의 [[STUN]]로 암베사 P를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 암베사 P를 끊을 수 있음", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 암베사 R을 끊을 수 없음"], 
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Ambessa's basic attacks, Q1, Q2, W, and E", "Braum's E(Shield) cannot block Ambessa's R (regardless of direction)", "Braum's P [[STUN]] cannot interrupt Ambessa's P. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Ambessa's P", "Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Ambessa's R"],
    },
  },
};
