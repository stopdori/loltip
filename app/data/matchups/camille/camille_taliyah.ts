// app/data/matchups/camille/camille_taliyah.ts
import type { MatchupSummary } from "../_types";

export const camille_taliyah: MatchupSummary = {
  champs: ["camille", "taliyah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 탈리야 W, R([[TERRAIN]])의 [[AIRBORNE]] / E의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 탈리야 R1의 [[SKILL_CHANNEL]], R2의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 탈리야 평타, Q(일반, 강화), W, E, R([[TERRAIN]] 생성)을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Taliyah's W and R ([[TERRAIN]]) [[AIRBORNE]] / E [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Taliyah's R1 [[SKILL_CHANNEL]] and R2 [[SKILL_CHANNEL]] [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Taliyah's auto-attacks, Q (Normal, Empowered), W, E, and R ([[TERRAIN]] creation)."
      ],
    },
    taliyah: {
      ko: ["W, R의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.",
        "E의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Taliyah's W and R [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Taliyah's E [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
