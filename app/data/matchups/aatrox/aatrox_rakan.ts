// app/data/matchups/aatrox/aatrox_rakan.ts
import type { MatchupSummary } from "../_types";

export const aatrox_rakan: MatchupSummary = {
  champs: ["aatrox", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 라칸 W, E의 [[DASH]]을 끊을 수 있음. \n 단, [[CHARM]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[GRAB]] can interrupt Rakan's W and E [[DASH]]. \n However, the [[CHARM]] still applies."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["R [[CHARM]] cannot interrupt Aatrox's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
