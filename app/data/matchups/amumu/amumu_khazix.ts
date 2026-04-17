// app/data/matchups/amumu/amumu_khazix.ts
import type { MatchupSummary } from "../_types";

export const amumu_khazix: MatchupSummary = {
  champs: ["amumu", "khazix"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 카직스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 카직스 E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 카직스 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Kha'Zix's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Kha'Zix's E [[DASH]].", "Amumu's R [[STUN]] can interrupt Kha'Zix's E [[DASH]]."],
    },
    khazix: {
      ko: [],
      en: [],
    },
  },
};
