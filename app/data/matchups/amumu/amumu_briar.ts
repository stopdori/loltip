// app/data/matchups/amumu/amumu_briar.ts
import type { MatchupSummary } from "../_types";

export const amumu_briar: MatchupSummary = {
  champs: ["amumu", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 브라이어 Q, W를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 브라이어 Q, W를 끊을 수 있음.", "아무무 Q로 브라이어 Q의 [[STUN]], E의 [[KNOCKBACK]] [[STUN]], R의 [[FEAR]]를 무시할 수 있음.\n단, 브라이어 Q, E, R의 데미지는 유효하고 [[STUN]], [[FEAR]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Briar's Q and W, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Briar's Q and W.", "Amumu's Q can ignore Briar's Q [[STUN]], E [[KNOCKBACK]] [[STUN]], and R [[FEAR]] during the dash phase.\nHowever, damage from Briar's Q, E, and R is applied and [[STUN]], [[FEAR]] remain active."],
    },
    briar: {
      ko: [],
      en: [],
    },
  },
};
