// app/data/matchups/amumu/amumu_nilah.ts
import type { MatchupSummary } from "../_types";

export const amumu_nilah: MatchupSummary = {
  champs: ["amumu", "nilah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 닐라 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 닐라 E를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 닐라 R(채널링)을 끊을 수 없음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Nilah's E, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Nilah's E.", "Amumu's Q and R [[STUN]] cannot interrupt Nilah's R (channeling)."],
    },
    nilah: {
      ko: [],
      en: [],
    },
  },
};
