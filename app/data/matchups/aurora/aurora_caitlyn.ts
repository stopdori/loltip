// app/data/matchups/aurora/aurora_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const aurora_caitlyn: MatchupSummary = {
  champs: ["aurora", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계, 돌진단계)는 케이틀린 W([[TRAP]])의 [[ROOT]]을 단계에 따라 다르게 판정. \n 준비단계에 [[ROOT]]이 걸리면 [[DASH]]이 발동하지 않고, \n 돌진단계에 [[ROOT]]이 걸리면 무시하고 [[DASH]]. 단, [[ROOT]]은 남아있음.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 케이틀린 W([[TRAP]])의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음.", 
        "R의 [[UNTARGETABLE]] [[BLINK]]으로 오로라에게 사용하는 케이틀린 R의 [[SKILL_CHANNEL]]을 시전 취소시키거나, 날아오는 [[PROJECTILE]]를 무효화할 수 있음.\n [[PROJECTILE]] 무효화 방법은 [[UNTARGETABLE]] 상태일 때 접촉하면 사라짐."],
      en: ["E (wind-up phase, dash phase) is affected by Caitlyn's W ([[TRAP]]) [[ROOT]] differently depending on the phase. \n If [[ROOT]]ed during the wind-up phase, the [[DASH]] does not activate. \n If [[ROOT]]ed during the dash phase, she ignores it and continues the [[DASH]]. However, the [[ROOT]] still applies.",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Caitlyn's W ([[TRAP]]) [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies.",
        "R [[UNTARGETABLE]] [[BLINK]] can cancel Caitlyn's R [[SKILL_CHANNEL]] cast on Aurora, or nullify an incoming [[PROJECTILE]]. \n The [[PROJECTILE]] is nullified when it makes contact with Aurora while she is [[UNTARGETABLE]]."],
    },
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 오로라 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음.",
        "활성화된 W([[TRAP]])의 [[TRUE_SIGHT]]로 오로라 W의 [[INVISIBILITY]] 상태를 볼 수 있음.",
      "R의 [[TRUE_SIGHT]]로 오로라 W의 [[INVISIBILITY]] 상태를 볼 수 있음. \n R의 [[PROJECTILE]]가 적중하면 종료."],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Aurora's W and E [[DASH]]. \n However, the [[ROOT]] and headshot still apply.",
        "Caitlyn's activated W's ([[TRAP]]) [[TRUE_SIGHT]] can see Aurora under W [[INVISIBILITY]].",
        "Caitlyn's R [[TRUE_SIGHT]] can see Aurora under W [[INVISIBILITY]]. \n This ends once R's [[PROJECTILE]] hits."],
    },
  },
  common: {
    ko: [],
    en: [],
  },
};
