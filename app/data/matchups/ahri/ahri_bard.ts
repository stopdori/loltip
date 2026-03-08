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
      ko: ["아리 E로 바드 E(벽이동)를 끊을 수 있음"],
      en: ["Ahri's E can interrupt Bard's E (wall-travel)"],
    },
    bard: {
      ko: ["바드 Q의 [[STUN]]로 아리 R을 끊을 수 있음. 단, [[STUN]]은 남아있음\n바드 R로 아리 R을 끊을 수 있음"],
      en: ["Bard's Q [[STUN]] can interrupt Ahri's R. However, the [[STUN]] still applies.\nBard's R can interrupt Ahri's R"],
    },
  },
};
