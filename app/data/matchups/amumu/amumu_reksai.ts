// app/data/matchups/amumu/amumu_reksai.ts
import type { MatchupSummary } from "../_types";

export const amumu_reksai: MatchupSummary = {
  champs: ["amumu", "reksai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 렉사이 매복폼 E(땅굴 파기), R를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 렉사이 E를 끊을 수 있음.", "아무무 Q로 렉사이 매복폼 평타의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Rek'Sai's Burrow E (tunneling) or R, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Rek'Sai's E.", "Amumu's Q is affected by Rek'Sai's Burrow basic attack [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    reksai: {
      ko: [],
      en: [],
    },
  },
};
