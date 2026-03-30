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
      ko: ["아리 E의 [[CHARM]]으로 레오나 E(돌진단계)의 [[DASH]]을 끊을 수 있음.\n단, [[ROOT]]은 남아있음."],
      en: ["Ahri's E can interrupt Leona's E (dash phase)"],
    },
    leona: {
      ko: ["레오나 Q, R의 [[STUN]]과 E의 [[ROOT]]으로 아리 R을 끊을 수 없음.\n단, [[ROOT]], [[STUN]]은 남아있음.", "레오나 E를 아리 R에 적중시키면 아리의 도착지점으로 같이 이동.\n단, 레오나 E는 [[ROOT]]이기 때문에 아리가 스킬을 사용할 수 있고, 아리 E의 [[CHARM]]으로 레오나를 멈출 수 있음."],
      en: ["Leona's Q and R [[STUN]] and E [[ROOT]] cannot interrupt Ahri's R. However, the [[ROOT]] and [[STUN]] still apply.", "If Leona's E hits Ahri during her R, Leona dashes to Ahri's destination"],
    },
  },
};
