// app/data/matchups/camille/camille_leesin.ts
import type { MatchupSummary } from "../_types";

export const camille_leesin: MatchupSummary = {
  champs: ["camille", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 리 신 Q2, W의 [[DASH]]을 끊을 수 있음.", 
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 리신 R의 [[KNOCKBACK]], [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 리 신 Q1, Q2, E1, R의 추가 데미지([[KNOCKBACK]]으로 부딪히는 충돌 데미지)를 피할 수 있음. \n 단, 리신 R을 카밀에게 사용했을 때 취소될 수 있음. [[COOLDOWN]] 소모 없음."
      ],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]] and [[GRAB]] can interrupt Lee Sin's Q2 and W [[DASH]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Lee Sin's R [[KNOCKBACK]] and [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can avoid Lee Sin's Q1, Q2, E1, and R bonus damage (the collision damage from being hit by [[KNOCKBACK]]). \n However, it can be canceled if Lee Sin uses R on Camille. No [[COOLDOWN]] is consumed."
      ],
    },
    leesin: {
      ko: ["R의 [[KNOCKBACK]], [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Lee Sin's R [[KNOCKBACK]] and [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
