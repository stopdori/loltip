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
      ko: ["E의 [[CHARM]]으로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]], W의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Aurelion Sol's Q [[SKILL_CHANNEL]] and W [[DASH]]."],
    },
    aurelionsol: {
      ko: ["R의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "[[EMPOWERED]] R(천상 강림)의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Ahri's R [[DASH]]. \n However, the [[STUN]] still applies.", "[[EMPOWERED]] R (Falling Star) [[AIRBORNE]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
