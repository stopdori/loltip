// app/data/matchups/amumu/amumu_irelia.ts
import type { MatchupSummary } from "../_types";

export const amumu_irelia: MatchupSummary = {
  champs: ["amumu", "irelia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 이렐리아 Q를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 이렐리아 Q를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 이렐리아 W(시전 집중)을 끊을 수 없음.", "아무무 Q로 이렐리아 E의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Irelia's Q, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Irelia's Q.", "Amumu's Q and R [[STUN]] cannot interrupt Irelia's W (channeling).", "Amumu's Q is affected by Irelia's E [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    irelia: {
      ko: [],
      en: [],
    },
  },
};
