// app/data/matchups/camille/camille_kled.ts
import type { MatchupSummary } from "../_types";

export const camille_kled: MatchupSummary = {
  champs: ["camille", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 있음.", 
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 클레드 승마폼 Q의 [[GRAB]], R의 [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
      "R의 [[UNTARGETABLE]]로 클레드 승마폼 Q([[PROJECTILE]]), E, R / 낙마폼 Q를 피할 수 있음. \n 단, 승마폼 Q의 [[PROJECTILE]]에 맞으면 발동하는 [[TETHER]] 효과를 피할 수 없음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Kled's mounted form E / dismounted form Q [[DASH]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Kled's mounted form Q [[GRAB]] and R [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Kled's mounted form Q ([[PROJECTILE]]), E, R / dismounted form Q. \n However, if hit by the mounted form Q [[PROJECTILE]], the [[TETHER]] effect cannot be dodged."],
    },
    kled: {
      ko: ["승마폼 Q의 [[GRAB]], R의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Kled's mounted form Q [[GRAB]] and R [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
