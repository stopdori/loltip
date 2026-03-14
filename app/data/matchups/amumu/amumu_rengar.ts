// app/data/matchups/amumu/amumu_rengar.ts
import type { MatchupSummary } from "../_types";

export const amumu_rengar: MatchupSummary = {
  champs: ["amumu", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 렝가 P(도약)를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 렝가 P(도약)를 끊을 수 있음.", "아무무 Q로 렝가 E(강화)의 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 W(강화)의 [[ROOT]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Rengar's passive (leap), but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Rengar's passive (leap).", "Amumu's Q is affected by Rengar's Empowered E [[ROOT]], but can still move if the dash phase activates.\nHowever, damage is applied and Empowered E's [[ROOT]] remains active."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
