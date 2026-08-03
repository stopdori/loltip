// app/data/matchups/ahri/ahri_bard.ts
import type { MatchupSummary } from "../_types";

export const ahri_bard: MatchupSummary = {
  champs: ["ahri", "bard"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 바드 E(터널)의 [[DASH]]를 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Bard's E (tunnel) [[DASH]].\nBard is immediately ejected to the nearest ground next to the wall."],
    },
    bard: {
      ko: ["바드 Q의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Bard's Q [[STUN]] cannot interrupt Ahri's R [[DASH]]. However, the [[STUN]] still applies.", "Bard's R (Tempered Fate) can interrupt Ahri's R [[DASH]]."],
    },
  },
};
