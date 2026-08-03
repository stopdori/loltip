// app/data/matchups/ahri/ahri_gnar.ts
import type { MatchupSummary } from "../_types";

export const ahri_gnar: MatchupSummary = {
  champs: ["ahri", "gnar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 나르 인간폼 / 메가폼 E의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Gnar's mini / mega E [[DASH]]."],
    },
    gnar: {
      ko: ["나르 메가폼 W의 [[STUN]]로 아리 R을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", "나르 R의 [[KNOCKBACK]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Gnar's mega W [[STUN]] cannot interrupt Ahri's R [[DASH]]. \n However, the [[STUN]] still applies.", "Gnar's R [[KNOCKBACK]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
