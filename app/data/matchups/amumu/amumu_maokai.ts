// app/data/matchups/amumu/amumu_maokai.ts
import type { MatchupSummary } from "../_types";

export const amumu_maokai: MatchupSummary = {
  champs: ["amumu", "maokai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q로 마오카이 Q의 [[AIRBORNE]], W의 [[ROOT]], R의 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 W, R의 [[ROOT]]도 남아있음.\n단, 마오카이 W가 적중하기 전에 아무무 Q의 돌진 단계가 발동하면 마오카이도 따라가고,\n마오카이 W가 적중하고 아무무 Q의 돌진 단계가 발동하면 아무무만 이동."],
      en: ["Amumu's Q is affected by Maokai's Q [[AIRBORNE]], W [[ROOT]], and R [[ROOT]], but can still move if the dash phase activates.\nHowever, damage is applied and W and R [[ROOT]] remain active.\nNote: If Maokai's W hits before Amumu's Q dash activates, Maokai is also pulled along.\nIf Maokai's W has already hit and Amumu's Q dash activates, only Amumu moves."],
    },
    maokai: {
      ko: [],
      en: [],
    },
  },
};
