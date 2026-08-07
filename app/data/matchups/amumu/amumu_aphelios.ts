// app/data/matchups/amumu/amumu_aphelios.ts
import type { MatchupSummary } from "../_types";

export const amumu_aphelios: MatchupSummary = {
  champs: ["amumu", "aphelios"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 아펠리오스 반월검(빨강) Q의 [[CAST_COMMIT]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 아펠리오스 중력포(보라) Q의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Q [[STUN]] can interrupt Aphelios's Crescendum (red) Q [[CAST_COMMIT]].", "Q [[CC_BUFFER]] can ignore Aphelios's Gravitum (purple) Q [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    aphelios: {
      ko: [],
      en: [],
    },
  },
};
