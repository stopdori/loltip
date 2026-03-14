// app/data/matchups/amumu/amumu_neeko.ts
import type { MatchupSummary } from "../_types";

export const amumu_neeko: MatchupSummary = {
  champs: ["amumu", "neeko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 니코 R(시전 집중)을 끊을 수 있음.", "아무무 Q로 니코 E의 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[ROOT]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Neeko's R (channeling).", "Amumu's Q is affected by Neeko's E [[ROOT]], but can still move if the dash phase activates.\nHowever, damage is applied and [[ROOT]] remains active."],
    },
    neeko: {
      ko: [],
      en: [],
    },
  },
};
