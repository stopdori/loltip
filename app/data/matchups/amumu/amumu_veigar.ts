// app/data/matchups/amumu/amumu_veigar.ts
import type { MatchupSummary } from "../_types";

export const amumu_veigar: MatchupSummary = {
  champs: ["amumu", "veigar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[CC_BUFFER]]로 베이가 E의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q로 [[DASH]] 도중 베이가의 활성화된 E의 경계에 닿으면 [[STUN]]에 걸리고 그 자리에 즉시 멈춤."],
      en: ["Q [[CC_BUFFER]] can ignore Veigar's E [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies. \n However, if Amumu's Q [[DASH]] touches the edge of Veigar's active E, [[STUN]] is applied and movement stops immediately."],
    },
    veigar: {
      ko: [],
      en: [],
    },
  },
};
