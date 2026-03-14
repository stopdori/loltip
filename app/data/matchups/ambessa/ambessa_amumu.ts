// app/data/matchups/ambessa/ambessa_amumu.ts
import type { MatchupSummary } from "../_types";

export const ambessa_amumu: MatchupSummary = {
  champs: ["ambessa", "amumu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 아무무 Q를 끊을 수 있음.", "암베사 R의 [[UNSTOPPABLE]]로 아무무 Q, R의 [[STUN]]을 무시할 수 있음.\n단, [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Amumu's Q.", "Ambessa's R [[UNSTOPPABLE]] can ignore Amumu's Q and R [[STUN]].\nHowever, [[STUN]] still applies."],
    },
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 암베사 P(이동)를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 암베사 P(이동)를 끊을 수 있음.", "아무무 Q의 투척 단계에 암베사 R의 [[SUPPRESS]]에 걸리고 아무무 Q의 돌진 단계가 발동되면 이동 가능.\n단, 데미지와 R의 [[STUN]]은 남아있음.", "아무무 Q의 돌진 단계에 암베사 R의 [[SUPPRESS]]에 걸리면 그 자리에 바로 멈춤."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Ambessa's P (movement), but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Ambessa's P (movement).", "If Amumu's Q is hit by Ambessa's R [[SUPPRESS]] during the throw phase and the dash phase activates, Amumu can still move.\nHowever, damage and R's [[STUN]] still apply.", "If Amumu's Q is hit by Ambessa's R [[SUPPRESS]] during the dash phase, Amumu stops immediately in place."],
    },
  },
};
