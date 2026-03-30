// app/data/matchups/ahri/ahri_lissandra.ts
import type { MatchupSummary } from "../_types";

export const ahri_lissandra: MatchupSummary = {
  champs: ["ahri", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CAHRM]]으로 리산드라 R(상대)의 [[CAST_COMMIT]] 끊을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E [[CHARM]] cannot interrupt Lissandra's R (on enemy) [[CAST_COMMIT]].\nHowever, the [[CHARM]] still applies."],
    },
    lissandra: {
      ko: ["리산드라 W의 [[ROOT]], R의 [[STUN]]로 아리 R을 끊을 수 없음. 단, [[ROOT]], [[STUN]]은 남아있음"],
      en: ["Lissandra's W [[ROOT]] and R [[STUN]] cannot interrupt Ahri's R. However, the [[ROOT]] and [[STUN]] still apply."],
    },
  },
};
