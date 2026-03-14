// app/data/matchups/amumu/amumu_zac.ts
import type { MatchupSummary } from "../_types";

export const amumu_zac: MatchupSummary = {
  champs: ["amumu", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 자크 E(돌진 단계)를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 자크 E(돌진 단계)를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 자크 E(준비 단계, 돌진 단계)을 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 자크 R을 끊을 수 없음.", "아무무 Q로 자크 Q, E, R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효"],
      en: ["Amumu's Q [[STUN]] cannot interrupt Zac's E (dash phase), but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Zac's E (dash phase).", "Amumu's Q and R [[STUN]] can interrupt Zac's E (preparation phase and dash phase).", "Amumu's Q and R [[STUN]] cannot interrupt Zac's R.", "Amumu's Q is affected by Zac's Q, E, and R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
