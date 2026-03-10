// app/data/matchups/braum/braum_jayce.ts
import type { MatchupSummary } from "../_types";

export const braum_jayce: MatchupSummary = {
  champs: ["braum", "jayce"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 제이스 캐논폼 평타, Q, QE, W(평타) / 해머폼 평타, Q, W(최초 피해), E를 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 제이스 캐논폼 평타, Q, QE, W(평타), 를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 제이스 Q는 즉시 ''삭제''되어 처음 피해만 받음", "브라움 P의 [[STUN]]로 제이스 해머폼 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 제이스 해머폼 Q를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Jayce's cannon form basic attacks, Q, QE, W (basic attacks), and hammer form basic attacks, Q, W (initial damage) and E.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Jayce's cannon form basic attacks, Q, QE and W (basic attacks).\nHowever, Jayce's Q is immediately deleted, dealing only the initial hit.", "Braum's P [[STUN]] cannot interrupt Jayce's hammer form Q. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Jayce's hammer form Q."],
    },
    jayce: {
      ko: [],
      en: [],
    },
  },
};
