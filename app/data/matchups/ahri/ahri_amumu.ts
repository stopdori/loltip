// app/data/matchups/ahri/ahri_amumu.ts
import type { MatchupSummary } from "../_types";

export const ahri_amumu: MatchupSummary = {
  champs: ["ahri", "amumu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 아무무 Q(돌진단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Amumu's Q (charge phase) [[DASH]]."],
    },
    amumu: {
      ko: ["아무무 Q(붕대)로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 아리 R의 [[DASH]]을 따라갈 수 있음. \n 단, [[STUN]]은 남아있음.", 
        "아무무 R의 [[STUN]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Amumu's Q cannot interrupt Ahri's R [[DASH]]. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Ahri's R [[DASH]]. \n However, the [[STUN]] still applies.", "Amumu's R [[STUN]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
