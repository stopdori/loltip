// app/data/matchups/ahri/ahri_aurelionsol.ts
import type { MatchupSummary } from "../_types";

export const ahri_aurelionsol: MatchupSummary = {
  champs: ["ahri", "aurelionsol"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 아우솔 Q([[SKILL_CHANNEL]]), W(비행)를 끊을 수 있음."],
      en: ["Ahri's E can interrupt Aurelion Sol's Q and W"],
    },
    aurelionsol: {
      ko: ["아우솔 R의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음.\n단, [[STUN]]은 남아있음.", "아우솔 R(천상 강림)의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies.", "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt Ahri's R"],
    },
  },
};
