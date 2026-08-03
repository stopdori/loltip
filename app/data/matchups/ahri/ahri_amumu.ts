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
      ko: ["E의 [[CHARM]]으로 아무무 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Amumu's Q [[DASH]]."],
    },
    amumu: {
      ko: ["아무무 Q(붕대)로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 아리 R의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 있음.",
      "아무무 Q의 [[CC_BUFFER]]로 아리 E의 [[CHARM]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[CHARM]]은 남아있음."],
      en: ["Amumu's Q cannot interrupt Ahri's R [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Ahri's R [[DASH]].", "Amumu's R [[STUN]] can interrupt Ahri's R [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Ahri's E [[CHARM]] and continue [[DASH]]. \n However, the [[CHARM]] still applies."],
    },
  },
};
