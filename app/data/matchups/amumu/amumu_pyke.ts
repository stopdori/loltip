// app/data/matchups/amumu/amumu_pyke.ts
import type { MatchupSummary } from "../_types";

export const amumu_pyke: MatchupSummary = {
  champs: ["amumu", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 파이크 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 파이크 E를 끊을 수 있음.", "아무무 Q로 파이크 Q의 [[GRAB]], E의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 Q의 [[SLOW]], E의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Pyke's E, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Pyke's E.", "Amumu's Q is affected by Pyke's Q [[GRAB]] and E [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and Q's [[SLOW]] and E's [[STUN]] remain active."],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
