// app/data/matchups/amumu/amumu_diana.ts
import type { MatchupSummary } from "../_types";

export const amumu_diana: MatchupSummary = {
  champs: ["amumu", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 다이애나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 다이애나 E의 [[DASH]]을 따라갈 수 있음.",
        "아무무 R의 [[STUN]]로 다이애나 E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 다이애나 R의 [[GRAB]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Diana's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Diana's E [[DASH]].", "Amumu's R [[STUN]] can interrupt Diana's E [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Diana's R [[GRAB]] and continue [[DASH]]."],
    },
    diana: {
      ko: [],
      en: [],
    },
  },
};
