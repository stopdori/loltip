// app/data/matchups/aurora/aurora_veigar.ts
import type { MatchupSummary } from "../_types";

export const aurora_veigar: MatchupSummary = {
  champs: ["aurora", "veigar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["W, E의 [[DASH]]로 활성화된 베이가 E의 [[STUN]]을 넘을 수 없음.", 
      "E의 준비단계 / 돌진단계는 베이가 E의 [[STUN]]을 단계에 따라 다르게 판정. \n 준비단계에 [[STUN]]이 걸리면 [[DASH]]이 발동하지 않고 \n 돌진단계에 [[STUN]]이 걸리면 무시하고 [[DASH]]. 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]] [[DASH]]으로 활성화된 베이가 E의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음.", ],
      en: ["W and E [[DASH]] cannot cross Veigar's activated E [[STUN]].",
        "E's wind-up phase / dash phase is affected by Veigar's E [[STUN]] differently depending on the phase. \n If [[STUN]]ned during the wind-up phase, the [[DASH]] does not activate, \n and if [[STUN]]ned during the dash phase, she ignores it and continues the [[DASH]]. However, the [[STUN]] still applies.",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Veigar's activated E [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    veigar: {
      ko: [],
      en: [],
    },
  },
};
