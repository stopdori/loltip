// app/data/matchups/camille/camille_poppy.ts
import type { MatchupSummary } from "../_types";

export const camille_poppy: MatchupSummary = {
  champs: ["camille", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 뽀삐 E의 [[KNOCKBACK]], [[STUN]] / R의 [[AIRBORNE]], [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 뽀삐 W [[ANTI_DASH]]의 [[AIRBORNE]], [[STUN]]을 무시할 수 없음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 뽀삐 R의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 뽀삐 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 뽀삐 P의 평타, Q, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Poppy's E [[KNOCKBACK]], [[STUN]] / R [[AIRBORNE]], [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] cannot ignore Poppy's W [[ANTI_DASH]] [[AIRBORNE]] and [[STUN]].",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Poppy's R [[SKILL_CHARGED]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Poppy's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Poppy's P auto-attack, Q, E, and R."
      ],
    },
    poppy: {
      ko: ["W의 [[ANTI_DASH]] / E의 [[KNOCKBACK]] / R의 [[AIRBORNE]], [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Poppy's W [[ANTI_DASH]] / E [[KNOCKBACK]] / R [[AIRBORNE]], [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
  common: {
    ko: ["[[TIP]]카밀 R의 [[UNTARGETABLE]], [[UNSTOPPABLE]]로 뽀삐 W의 [[ANTI_DASH]]를 무시할 수 있음. [[CLIP:https://www.youtube.com/shorts/d0q42xHQPtw]]"],
    en: ["[[TIP]]Camille's R [[UNTARGETABLE]] and [[UNSTOPPABLE]] can ignore Poppy's W [[ANTI_DASH]]. [[CLIP:https://www.youtube.com/shorts/d0q42xHQPtw]]"],
  },
};
