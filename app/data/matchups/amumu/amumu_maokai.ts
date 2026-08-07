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
      ko: ["Q의 [[CC_BUFFER]]로 마오카이 Q의 [[AIRBORNE]], W의 [[ROOT]], R의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음.  단, [[ROOT]]는 남아있음. \n 단, 아무무 Q를 제3자에게 사용하고 마오카이 W가 적중하기 전에 아무무 Q의 [[DASH]]이 발동하면 마오카이도 따라감. \n 단, 마오카이 W가 적중하고 아무무에게 적중하고 Q의 [[DASH]]가 발동하면 아무무만 이동."],
      en: ["Q [[CC_BUFFER]] can ignore Maokai's Q [[AIRBORNE]], W [[ROOT]], and R [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies. \n However, if Amumu casts Q on a third party and Maokai's W hits before Amumu's Q [[DASH]] activates, Maokai is also pulled along. \n However, if Maokai's W has already hit Amumu and then Q's [[DASH]] activates, only Amumu moves."],
    },
    maokai: {
      ko: [],
      en: [],
    },
  },
};
