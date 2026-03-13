// app/data/matchups/ambessa/ambessa_sion.ts
import type { MatchupSummary } from "../_types";

export const ambessa_sion: MatchupSummary = {
  champs: ["ambessa", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 사이온 Q(시전 집중) 끊을 수 있음", "암베사 R의 [[SUPPRESS]]으로 사이온 R을 끊을 수 없음.\n단, 다가오는 사이온 R은 암베사 R로 피할 수 있고.\n멀어지는 사이온 R은 사미라 R로 이동하여 몸으로 끊을 수 있음", "암베사 R의 [[UNSTOPPABLE]]로 사이온 Q(충전), R의 [[AIRBORNE]] [[STUN]], 을 무시할 수 있음.\n단, [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Sion's Q (channeling).", "Ambessa's R [[SUPPRESS]] cannot interrupt Sion's R.\nHowever, an incoming Sion R can be dodged with Ambessa's R,\nand a departing Sion R can be stopped by moving into its path with Ambessa's R.", "Ambessa's R [[UNSTOPPABLE]] can ignore Sion's Q (charged) and R [[AIRBORNE]] [[STUN]].\nHowever, [[STUN]] still applies."],
    },
    sion: {
      ko: [],
      en: [],
    },
  },
};
