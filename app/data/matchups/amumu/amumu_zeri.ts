// app/data/matchups/amumu/amumu_zeri.ts
import type { MatchupSummary } from "../_types";

export const amumu_zeri: MatchupSummary = {
  champs: ["amumu", "zeri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 제리 E(돌진, 벽이동)를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 제리 E(돌진, 벽이동)를 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Zeri's E (dash, wall traverse), but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Zeri's E (dash, wall traverse)."],
    },
    zeri: {
      ko: [],
      en: [],
    },
  },
};
