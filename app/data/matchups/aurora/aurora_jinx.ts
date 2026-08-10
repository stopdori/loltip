// app/data/matchups/aurora/aurora_jinx.ts
import type { MatchupSummary } from "../_types";

export const aurora_jinx: MatchupSummary = {
  champs: ["aurora", "jinx"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 징크스 E의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음. \n 단, 활성화된 E([[TRAP]])는 넘을 수 없고 즉시 [[DASH]]을 멈춤.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 징크스 E의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Jinx's E [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies. \n However, an activated E ([[TRAP]]) cannot be crossed and immediately stops the [[DASH]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Jinx's E [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    jinx: {
      ko: [],
      en: [],
    },
  },
};
