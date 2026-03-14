// app/data/matchups/amumu/amumu_malphite.ts
import type { MatchupSummary } from "../_types";

export const amumu_malphite: MatchupSummary = {
  champs: ["amumu", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 말파이트 R를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 Q로 말파이트 R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Malphite's R, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's Q is affected by Malphite's R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    malphite: {
      ko: [],
      en: [],
    },
  },
};
