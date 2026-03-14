// app/data/matchups/amumu/amumu_naafiri.ts
import type { MatchupSummary } from "../_types";

export const amumu_naafiri: MatchupSummary = {
  champs: ["amumu", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 나피리 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 나피리 E, R(시전 집중, 돌진 단계)을 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 나피리 R(시전 집중)을 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Naafiri's E, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Naafiri's E and R (channeling and dash phases).", "Amumu's Q and R [[STUN]] can interrupt Naafiri's R (channeling)."],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
