// app/data/matchups/amumu/amumu_anivia.ts
import type { MatchupSummary } from "../_types";

export const amumu_anivia: MatchupSummary = {
  champs: ["amumu", "anivia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 애니비아 R(채널링)을 끊을 수 있음.", "아무무 Q로 애니비아 Q의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Anivia's R (channeling).", "Amumu's Q is affected by Anivia's Q [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    anivia: {
      ko: [],
      en: [],
    },
  },
};
