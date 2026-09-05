// app/data/matchups/ahri/ahri_ezreal.ts
import type { MatchupSummary } from "../_types";

export const ahri_ezreal: MatchupSummary = {
  champs: ["ahri", "ezreal"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [],
      en: [],
    },
    ezreal: {
      ko: ["E의 [[CC_BUFFER]]로 아리 E의 [[CHARM]]을 무시하고 [[BLINK]] 할 수 있음. \n 단, [[CHARM]]은 남아있음."],
      en: ["Ezreal's E (preparation phase) [[CC_BUFFER]] can briefly ignore Ahri's E [[CHARM]] to cast the next phase.\nHowever, the [[CHARM]] still applies after the teleport phase ends."],
    },
  },
};
