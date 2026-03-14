// app/data/matchups/amumu/amumu_zyra.ts
import type { MatchupSummary } from "../_types";

export const amumu_zyra: MatchupSummary = {
  champs: ["amumu", "zyra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q로 자이라 E의 [[ROOT]], R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 E의 [[ROOT]]도 남아있음."],
      en: ["Amumu's Q is affected by Zyra's E [[ROOT]] and R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied and E's [[ROOT]] remains active."],
    },
    zyra: {
      ko: [],
      en: [],
    },
  },
};
