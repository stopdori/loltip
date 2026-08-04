// app/data/matchups/alistar/alistar_annie.ts
import type { MatchupSummary } from "../_types";

export const alistar_annie: MatchupSummary = {
  champs: ["alistar", "annie"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 애니 P의 [[STUN]]을 해제할 수 있음."],
      en: ["R [[CC_CLEANSE]] can cleanse Annie's P [[STUN]]."],
    },
    annie: {
      ko: ["애니 P의 [[STUN]]로 알리스타 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Alistar's W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
