// app/data/matchups/amumu/amumu_lucian.ts
import type { MatchupSummary } from "../_types";

export const amumu_lucian: MatchupSummary = {
  champs: ["amumu", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 루시안 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 루시안 E를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 루시안 R(채널링)을 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Lucian's E, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Lucian's E.", "Amumu's Q and R [[STUN]] can interrupt Lucian's R (channeling)."],
    },
    lucian: {
      ko: [],
      en: [],
    },
  },
};
