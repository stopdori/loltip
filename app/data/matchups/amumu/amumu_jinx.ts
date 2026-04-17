// app/data/matchups/amumu/amumu_jinx.ts
import type { MatchupSummary } from "../_types";

export const amumu_jinx: MatchupSummary = {
  champs: ["amumu", "jinx"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[CC_BUFFER]]로 징크스 E([[TRAP]])의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음. \n 단, 활성화된 [[TRAP]]을 아무무 Q의 [[DASH]]로 넘을 수 없음. 즉시 멈춤."],
      en: ["Amumu's Q [[CC_BUFFER]] can ignore Jinx's E [[TRAP]] [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies. \n However, Amumu's Q [[DASH]] cannot cross an activated [[TRAP]] — it stops immediately."],
    },
    jinx: {
      ko: ["징크스 E(덫)를 아무무가 밟으면 아무무가 Q(붕대)를 사용 할 수 없음."],
      en: ["If Amumu steps on Jinx's E (trap), Amumu cannot use Q (Bandage Toss)."],
    },
  },
};
