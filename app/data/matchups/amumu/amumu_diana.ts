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
      ko: ["Q의 [[STUN]]로 다이애나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 다이애나 E의 [[DASH]]을 따라갈 수 있음.",
        "R의 [[STUN]]로 다이애나 E의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 다이애나 R의 [[GRAB]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Diana's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Diana's E [[DASH]].", "R [[STUN]] can interrupt Diana's E [[DASH]].", "Q [[CC_BUFFER]] can ignore Diana's R [[GRAB]] and continue [[DASH]]."],
    },
    diana: {
      ko: ["R의 [[GRAB]]으로 아무무 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Amumu's Q [[DASH]]."],
    },
  },
};
