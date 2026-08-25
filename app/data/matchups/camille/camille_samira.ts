// app/data/matchups/camille/camille_samira.ts
import type { MatchupSummary } from "../_types";

export const camille_samira: MatchupSummary = {
  champs: ["camille", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 사미라 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 사미라 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 사미라 평타(원거리), Q, W, E, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Samira's R [[SKILL_CHANNEL]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Samira's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Samira's auto-attack (ranged), Q, W, E, and R."],
    },
    samira: {
      ko: ["P의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 왜냐하면 사미라 P의 [[AIRBORNE]]은 이미 [[IMMOBILIZING]] 대상에게 발동하는데 \n [[IMMOBILIZING]] 효과가 이미 카밀의 [[DASH]]를 끊었을 것이기에. P가 발동하여도 사미라가 끊은것이 아님."],
      en: ["Samira's P [[AIRBORNE]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n This is because Samira's P [[AIRBORNE]] only triggers on a target that is already [[IMMOBILIZING]]ed, \n and that [[IMMOBILIZING]] effect would have already interrupted Camille's [[DASH]] by itself. So even though P triggers, it isn't what interrupted it."],
    },
  },
};
