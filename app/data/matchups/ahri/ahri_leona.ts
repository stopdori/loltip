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
      ko: ["E의 [[CHARM]]으로 레오나 E(돌진단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Leona's E (dash phase) [[DASH]]."],
    },
    leona: {
      ko: ["레오나 Q, R의 [[STUN]]과 E의 [[ROOT]]으로 아리 R을 끊을 수 없음. \n 단, [[ROOT]], [[STUN]]은 남아있음.",
        "레오나 E의 [[HOMING]]으로 아리 R의 [[DASH]]의 도착지점으로 같이 이동할 수 있음. \n 단, 아리는 E의 [[CHARM]]으로 레오나의 [[DASH]]을 끊을 수 있음."],
      en: ["Leona's Q and R [[STUN]] and E [[ROOT]] cannot interrupt Ahri's R. \n However, the [[ROOT]] and [[STUN]] still apply.", "Leona's E [[HOMING]] allows her to follow Ahri's R [[DASH]] to the destination. \n However, Ahri's E [[CHARM]] can interrupt Leona's [[DASH]]."],
    },
  },
};
