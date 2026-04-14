// app/data/matchups/ambessa/ambessa_amumu.ts
import type { MatchupSummary } from "../_types";

export const ambessa_amumu: MatchupSummary = {
  champs: ["ambessa", "amumu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 아무무 Q의 [[DASH]]을 끊을 수 있음.",
        "암베사 R의 [[UNSTOPPABLE]]로 아무무 Q, R의 [[STUN]]을 잠시 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Amumu's Q [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Amumu's Q and R [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    amumu: {
      ko: ["아무무 Q(투척단계)의 [[CC_BUFFER]]로 암베사 R의 [[SUPPRESS]] 효과를 무시할 수 있음.",
        "아무무 Q의 [[STUN]]로 암베사 P의 [[DASH]]을 끊을 수 없음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 암베사 P의 [[DASH]]을 따라갈 수 있음. \n 단, [[STUN]]은 남아있음.", 
      "아무무 R의 [[STUN]]로 암베사 P의 [[DASH]]을 끊을 수 있음."],
      en: ["Amumu's Q (throw phase) [[CC_BUFFER]] can ignore Ambessa's R [[SUPPRESS]].", "Amumu's Q [[STUN]] cannot interrupt Ambessa's P [[DASH]]. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Ambessa's P [[DASH]]. \n However, the [[STUN]] still applies.", "Amumu's R [[STUN]] can interrupt Ambessa's P [[DASH]]."],
    },
  },
};
