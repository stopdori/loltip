// app/data/matchups/amumu/amumu_urgot.ts
import type { MatchupSummary } from "../_types";

export const amumu_urgot: MatchupSummary = {
  champs: ["amumu", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 우르곳 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 우르곳 E(돌진 단계)를 끊을 수 있음.", "아무무 Q로 우르곳 E의 [[KNOCKBACK]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효.", "아무무 Q의 투척 단계에 우르곳 R2의 [[SUPPRESS]]에 걸리고 아무무 Q의 돌진 단계가 발동되어도 탈출이 불가능함."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Urgot's E, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Urgot's E (dash phase).", "Amumu's Q is affected by Urgot's E [[KNOCKBACK]], but can still move if the dash phase activates.\nHowever, damage is applied.", "Even if Amumu is hit by Urgot's R2 [[SUPPRESS]] during Q's throw phase and the dash activates, Amumu cannot escape."],
    },
    urgot: {
      ko: [],
      en: [],
    },
  },
};
