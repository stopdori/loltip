// app/data/matchups/ahri/ahri_jinx.ts
import type { MatchupSummary } from "../_types";

export const ahri_jinx: MatchupSummary = {
  champs: ["ahri", "jinx"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 징크스 W, R의 [[CAST_COMMIT]]을 멈출 수 없음."],
      en: ["E [[CHARM]] cannot stop Jinx's W or R [[CAST_COMMIT]]."],
    },
    jinx: {
      ko: ["징크스 E의 [[ROOT]]으로 아리 R의 [[DASH]]을 끊을 수 있음. ([[ROOT]]에서는 흔치 않은 판정)"],
      en: ["Jinx's E [[ROOT]] can interrupt Ahri's R. (uncommon interaction)"],
    },
  },
};
