// app/data/matchups/amumu/amumu_ivern.ts
import type { MatchupSummary } from "../_types";

export const amumu_ivern: MatchupSummary = {
  champs: ["amumu", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 아이번 R(아이번이 데이지와 멀어지면 데이지가 아이번 옆으로 순간이동 하는것)을 따라갈 수 있음.\n단, [[STUN]]은 R(데이지)에게 남아있음.", "아무무 Q의 [[STUN]]로 아이번 Q(이동)를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 아이번 Q(이동)를 끊을 수 있음.", "아무무 Q로 아이번 Q의 [[ROOT]], R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 Q의 [[ROOT]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] can follow Ivern's R (when Ivern moves away from Daisy, Daisy teleports next to Ivern).\nHowever, [[STUN]] remains on R (Daisy).", "Amumu's Q [[STUN]] cannot interrupt Ivern's Q (movement), but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Ivern's Q (movement).", "Amumu's Q is affected by Ivern's Q [[ROOT]] and R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied and Q's [[ROOT]] remains active."],
    },
    ivern: {
      ko: [],
      en: [],
    },
  },
};
