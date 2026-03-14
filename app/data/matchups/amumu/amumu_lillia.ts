// app/data/matchups/amumu/amumu_lillia.ts
import type { MatchupSummary } from "../_types";

export const amumu_lillia: MatchupSummary = {
  champs: ["amumu", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 릴리아 W를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 릴리아 W를 끊을 수 있음.", "아무무 Q로 릴리아 R의 [[SLEEP]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, [[SLEEP]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Lillia's W, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Lillia's W.", "Amumu's Q is affected by Lillia's R [[SLEEP]], but can still move if the dash phase activates.\nHowever, [[SLEEP]] remains active."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
