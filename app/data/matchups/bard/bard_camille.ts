// app/data/matchups/bard/bard_camille.ts
import type { MatchupSummary } from "../_types";

export const bard_camille: MatchupSummary = {
  champs: ["bard", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 카밀 E(투척, 그렙, 돌진 단계)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 카밀 E의 대기 단계에 [[STUN]]에 적중하거나 이전 단계에서 맞은 [[STUN]]이 남아있다면 돌진 단계를 할 수 없음.",
        "바드 R(존야)로 카밀 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Bard's Q [[STUN]] cannot interrupt Camille's E [[DASH]] (throw, grab, or dash phases). \n However, the [[STUN]] remains. \n However, if [[STUN]] lands during the standby phase or a [[STUN]] from a previous phase remains, the dash phase cannot be executed.",
        "Bard's R (Zhonya's) can interrupt Camille's E [[DASH]]."],
    },
    camille: {
      ko: ["카밀 E(투척단계)의 [[CC_BUFFER]]로 바드 Q의 [[STUN]] 효과를 잠시 무시하고 다음 단계를 시전할 수 있음. \n 단, 카밀 E의 그렙단계가 종료된 후 대기단계에 [[STUN]]이 남아있다면 종료됨."],
      en: ["Camille's E (throw phase) [[CC_BUFFER]] briefly ignores Bard's Q [[STUN]], allowing the next phase to proceed. \n However, if the [[STUN]] remains during the standby phase after Camille's E grab phase ends, it will be interrupted."],
    },
  },
};
