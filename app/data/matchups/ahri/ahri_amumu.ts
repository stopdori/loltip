// app/data/matchups/ahri/ahri_amumu.ts
import type { MatchupSummary } from "../_types";

export const ahri_amumu: MatchupSummary = {
  champs: ["ahri", "amumu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 아무무 Q(돌진 단계)의 [[DASH]]을 끊을 수 있음. 단, 아무무의 데미지와 [[STUN]]은 유효.", "아리 E의 [[CHARM]]으로 아무무 Q, E, R의 [[CAST_COMMIT]], W의 [[CAST_COMMIT]]을 끊을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E can interrupt Amumu's Q (dash phase). However, Amumu's damage and [[STUN]] still apply.", "Ahri's E [[CHARM]] cannot interrupt Amumu's Q, E, R [[CAST_COMMIT]] or W [[CAST_COMMIT]].\nHowever, the [[CHARM]] still applies."],
    },
    amumu: {
      ko: ["아무무 Q(붕대)로 아리 R을 끊을 수 없지만, 아리를 따라갈 수 있음. 단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]으로 아리 R을 끊을 수 있음."],
      en: ["Amumu's Q cannot interrupt Ahri's R but can follow her. The [[STUN]] still applies.", "Amumu's R can interrupt Ahri's R"],
    },
  },
};
