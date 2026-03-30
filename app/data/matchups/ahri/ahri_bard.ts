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
      ko: ["아리 E의 [[CHARM]]으로 바드 E(터널)를 끊을 수 있음.\n단, 즉시 벽에서 가장 가까운 땅으로 나옴."],
      en: ["Ahri's E can interrupt Bard's E (tunnel).\nBard is immediately ejected to the nearest ground next to the wall."],
    },
    bard: {
      ko: ["바드 Q의 [[STUN]]로 아리 R을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "바드 R(존야)로 아리 R의 [[DASH]]을 끊을 수 있음"],
      en: ["Bard's Q [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies.", "Bard's R can interrupt Ahri's R"],
    },
  },
};
