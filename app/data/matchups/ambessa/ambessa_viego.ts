// app/data/matchups/ambessa/ambessa_viego.ts
import type { MatchupSummary } from "../_types";

export const ambessa_viego: MatchupSummary = {
  champs: ["ambessa", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 비에고 W를 끊을 수 있음", "암베사 R의 [[UNSTOPPABLE]]로 비에고 W의 [[STUN]], R의 [[AIRBORNE]]을 무시할 수 있음.\n단 비에고 W의 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Viego's W.", "Ambessa's R [[UNSTOPPABLE]] can ignore Viego's W [[STUN]] and R [[AIRBORNE]].\nHowever, Viego's W [[STUN]] still applies."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
