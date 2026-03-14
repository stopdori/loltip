// app/data/matchups/amumu/amumu_talon.ts
import type { MatchupSummary } from "../_types";

export const amumu_talon: MatchupSummary = {
  champs: ["amumu", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 탈론 Q(돌진)를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 탈론 Q(돌진)를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 탈론 E(벽넘기)을 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Talon's Q (dash), but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Talon's Q (dash).", "Amumu's Q and R [[STUN]] can interrupt Talon's E (wall jump)."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
