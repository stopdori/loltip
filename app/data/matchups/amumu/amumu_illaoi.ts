// app/data/matchups/amumu/amumu_illaoi.ts
import type { MatchupSummary } from "../_types";

export const amumu_illaoi: MatchupSummary = {
  champs: ["amumu", "illaoi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 일라오이 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 일라오이 W의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 일라오이 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Illaoi's W [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Illaoi's W [[DASH]].", "R [[STUN]] can interrupt Illaoi's W [[DASH]]."],
    },
    illaoi: {
      ko: [],
      en: [],
    },
  },
};
