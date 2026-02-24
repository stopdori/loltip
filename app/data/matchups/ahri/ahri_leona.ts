// app/data/matchups/ahri/ahri_leona.ts
import type { MatchupSummary } from "../_types";

export const ahri_leona: MatchupSummary = {
  champs: ["ahri", "leona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E로 레오나 E(돌진단계)를 끊을 수 있음"],
      en: [""],
    },
    leona: {
      ko: ["레오나 Q, R의 [[STUN]]과 E의 [[ROOT]]으로 아리 R을 끊을 수 없음. 단, [[ROOT]], [[STUN]]은 남아있음", "레오나 E를 아리 R에 적중시키면 아리의 도착지점으로 같이 이동"],
      en: [],
    },
  },
};
