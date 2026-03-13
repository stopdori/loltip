// app/data/matchups/ambessa/ambessa_vi.ts
import type { MatchupSummary } from "../_types";

export const ambessa_vi: MatchupSummary = {
  champs: ["ambessa", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 바이 Q를 끊을 수 있음", "암베사 R의 [[SUPPRESS]]으로 바이 R을 끊을 수 없음", "암베사 R의 [[UNSTOPPABLE]]로 바이 Q, R의 [[AIRBORNE]], [[STUN]]을 무시할 수 있음.\n단, 바이 R은 바이가 암베사에게 도착해서 내려 찍을때 사용해야 무시할 수 있음.\n단, [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Vi's Q.", "Ambessa's R [[SUPPRESS]] cannot interrupt Vi's R.", "Ambessa's R [[UNSTOPPABLE]] can ignore Vi's Q and R [[AIRBORNE]] and [[STUN]].\nHowever, for Vi's R, Ambessa must activate it when Vi arrives and slams down.\nHowever, [[STUN]] still applies."],
    },
    vi: {
      ko: [],
      en: [],
    },
  },
};
