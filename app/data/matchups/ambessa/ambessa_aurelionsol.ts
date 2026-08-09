// app/data/matchups/ambessa/ambessa_aurelionsol.ts
import type { MatchupSummary } from "../_types";

export const ambessa_aurelionsol: MatchupSummary = {
  champs: ["ambessa", "aurelionsol"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]], W(비행)의 [[DASH]] 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 아우렐리온 솔 R의 [[STUN]], [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Aurelion Sol's Q [[SKILL_CHANNEL]] and W (flight) [[DASH]].", "R [[UNSTOPPABLE]] can ignore Aurelion Sol's R [[STUN]] and [[AIRBORNE]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 암베사 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "R(천상강림)의 [[AIRBORNE]]으로 암베사 P의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Ambessa's P [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Ambessa's P [[DASH]]."],
    },
  },
};
