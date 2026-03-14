// app/data/matchups/amumu/amumu_darius.ts
import type { MatchupSummary } from "../_types";

export const amumu_darius: MatchupSummary = {
  champs: ["amumu", "darius"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 다리우스 R(시전 집중)을 끊을 수 있음.\n단, 다리우스 R이 쿨타임이 되지 않음.", "아무무 Q로 다리우스 E의 [[GRAB]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 다리우스 E의 [[SLOW]]는 남아있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Darius's R (channeling).\nNote: Darius's R does not go on cooldown when interrupted.", "Amumu's Q is affected by Darius's E [[GRAB]], but can still move if the dash phase activates.\nHowever, Darius's E [[SLOW]] remains active."],
    },
    darius: {
      ko: [],
      en: [],
    },
  },
};
