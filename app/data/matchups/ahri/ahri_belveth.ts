// app/data/matchups/ahri/ahri_belveth.ts
import type { MatchupSummary } from "../_types";

export const ahri_belveth: MatchupSummary = {
  champs: ["ahri", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 벨베스 Q, W(채널링)를 끊을 수 있음.", "아리 E의 [[CHARM]]으로 벨베스 R의 [[CAST_COMMIT]]을 멈출 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E can interrupt Bel'Veth's Q and W (channeling)", "Ahri's E [[CHARM]] cannot stop Bel'Veth's R [[CAST_COMMIT]].\nHowever, the [[CHARM]] still applies."],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Bel'Veth's W can interrupt Ahri's R"],
    },
  },
};
