// app/data/matchups/amumu/amumu_diana.ts
import type { MatchupSummary } from "../_types";

export const amumu_diana: MatchupSummary = {
  champs: ["amumu", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 다이애나 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 다이애나 E를 끊을 수 있음.", "아무무 Q로 다이애나 R의 [[GRAB]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Diana's E, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Diana's E.", "Amumu's Q is affected by Diana's R [[GRAB]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    diana: {
      ko: [],
      en: [],
    },
  },
};
