// app/data/matchups/braum/braum_hecarim.ts
import type { MatchupSummary } from "../_types";

export const braum_hecarim: MatchupSummary = {
  champs: ["braum", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 헤카림 평타, Q, W(최초 한틱), E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 헤카림 E(발굽을 들었을때)를 끊을 수 없음. 단, [[STUN]], [[AIRBORNE]]은 남아있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Hecarim's basic attacks, Q, W (first tick), E and R.", "Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Hecarim's E (when hooves are raised). However, [[STUN]] and [[AIRBORNE]] still apply."],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 브라움 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 브라움 P의 [[STUN]], R의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Braum's E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Braum's P [[STUN]] and R [[AIRBORNE]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
