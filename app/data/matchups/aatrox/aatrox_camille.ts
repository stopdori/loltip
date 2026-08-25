// app/data/matchups/aatrox/aatrox_camille.ts
import type { MatchupSummary } from "../_types";

export const aatrox_camille: MatchupSummary = {
  champs: ["aatrox", "camille"],
  summary: {
    ko: ["카밀 R은 아트록스 W 사슬 효과를 무시함"],
    en: ["Camille's R dodges Aatrox's W chain."],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Aatrox's Q [[AIRBORNE]] and W [[GRAB]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.",
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]]로 아트록스 Q, W([[PROJECTILE]])를 피할 수 있음.\n 단, W의 [[PROJECTILE]]에 맞으면 발동하는 [[TETHER]] 효과를 피할 수 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Aatrox's Q [[AIRBORNE]] and W [[GRAB]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Aatrox's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Aatrox's Q and W ([[PROJECTILE]]).\n However, if hit by W's [[PROJECTILE]], the triggered [[TETHER]] effect cannot be dodged."
      ],
    },
  },
};
