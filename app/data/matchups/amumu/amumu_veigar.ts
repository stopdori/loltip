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
      ko: ["아무무 Q로 베이가 E의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 아무무 Q를 시전하고 베이가 E의 경계에 닿아서 [[STUN]]에 걸렸을 때 아무무 Q가 적에게 적중하면 Q로 이동 가능.\n단, 아무무 Q의 돌진 단계로 날아가는 도중 베이가 E의 경계에 닿으면 [[STUN]]에 걸리고 이동을 즉시 멈춤."],
      en: ["Amumu's Q is affected by Veigar's E [[STUN]], but can still move if the dash phase activates.\nNote: If Amumu has already cast Q and touches Veigar's E border causing [[STUN]], Amumu can still move when Q hits the target.\nNote: If Amumu's Q dash phase touches Veigar's E border, [[STUN]] is applied and movement stops immediately."],
    },
    veigar: {
      ko: [],
      en: [],
    },
  },
};
