// app/data/matchups/ambessa/ambessa_jinx.ts
import type { MatchupSummary } from "../_types";

export const ambessa_jinx: MatchupSummary = {
  champs: ["ambessa", "jinx"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[UNSTOPPABLE]]로 징크스 E의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["Ambessa's R [[UNSTOPPABLE]] can ignore Jinx's E [[ROOT]]. \n However, the [[ROOT]] still applies after [[UNSTOPPABLE]] ends."],
    },
    jinx: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 징크스 E([[TARP]])를 넘어서 이동 할 수 있음.", 
        "암베사 P로 징크스 E(활성화 된 덫)를 넘을 수 없음."],
      en: ["Ambessa's R [[SUPPRESS]] allows movement over Jinx's E ([[TARP]]).", "Ambessa's P cannot pass over Jinx's E (activated trap)."],
    },
  },
};
