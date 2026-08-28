// app/data/matchups/alistar/alistar_diana.ts
import type { MatchupSummary } from "../_types";

export const alistar_diana: MatchupSummary = {
  champs: ["alistar", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 다이애나 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 다이애나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 다이애나 R의 [[SLOW]], [[AIRBORNE]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Diana's E [[DASH]].", "E [[STUN]] cannot interrupt Diana's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Diana's R [[SLOW]] and [[AIRBORNE]]."],
    },
    diana: {
      ko: ["R의 [[GRAB]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Alistar's W [[DASH]]."],
    },
  },
};
