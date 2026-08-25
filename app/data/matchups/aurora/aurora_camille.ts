// app/data/matchups/aurora/aurora_camille.ts
import type { MatchupSummary } from "../_types";

export const aurora_camille: MatchupSummary = {
  champs: ["aurora", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 카밀 E의 [[STUN]] / R의 [[SILENCE]], [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[SILENCE]]은 0.1초 지속이라 사라짐. \n 단, R의 [[KNOCKBACK]]은 밀려나다가 [[DASH]] 발동.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로  카밀 E의 [[STUN]] / R의 [[SILENCE]], [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Camille's E [[STUN]] / R's [[SILENCE]] and [[KNOCKBACK]] and continue [[DASH]]. \n However, the [[SILENCE]] only lasts 0.1s so it wears off anyway. \n However, the [[DASH]] activates while being knocked back by R's [[KNOCKBACK]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Camille's E [[STUN]] / R's [[SILENCE]] and [[KNOCKBACK]] and continue [[DASH]]."],
    },
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 오로라 평타, Q1, Q2, W, E, R을 피할 수 있음. \n 단, 카밀에게 걸린 Q2는 [[UNTARGETABLE]] 상태일 때 오로라가 직접 발동해도 Q2의 [[PROJECTILE]]가 돌아가지 않음. \n 시간이 만료 됐을때 돌아가는 Q2의 [[PROJECTILE]]는 정상적으로 작동하지만 [[UNTARGETABLE]]로 피할 수 있음. [[CLIP:https://www.youtube.com/shorts/fV9_gvwcuOw]]"],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Aurora's W and E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Aurora's auto-attacks, Q1, Q2, W, E, and R. \n However, if Q2 is already applied to Camille, even if Aurora manually triggers it while Camille is [[UNTARGETABLE]], Q2's [[PROJECTILE]] does not return. \n The [[PROJECTILE]] that returns when the duration expires works normally, but it can be dodged with [[UNTARGETABLE]]. [[CLIP:https://www.youtube.com/shorts/fV9_gvwcuOw]]"],
    },
  },
};
