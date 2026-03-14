// app/data/matchups/amumu/amumu_aphelios.ts
import type { MatchupSummary } from "../_types";

export const amumu_aphelios: MatchupSummary = {
  champs: ["amumu", "aphelios"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 아펠리오스 반월검(빨강) Q를 끊을 수 있음.", "아무무 Q로 아펠리오스 중력포(보라) Q의 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] can interrupt Aphelios's Crescendum (red) Q.", "Amumu's Q is affected by Aphelios's Gravitum (purple) Q [[ROOT]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    aphelios: {
      ko: [],
      en: [],
    },
  },
};
