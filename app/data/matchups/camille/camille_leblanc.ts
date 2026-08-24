// app/data/matchups/camille/camille_leblanc.ts
import type { MatchupSummary } from "../_types";

export const camille_leblanc: MatchupSummary = {
  champs: ["camille", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 르블랑 W의 [[DASH]]을 끊을 수 있음.",
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 르블랑 E의 [[ROOT]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음. \n 단, 르블랑 E의 [[PROJECTILE]]에 맞으면 발동하는 [[TETHER]] 효과를 피할 수 없음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt LeBlanc's W [[DASH]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore LeBlanc's E [[ROOT]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled. \n However, if hit by LeBlanc's E [[PROJECTILE]], the triggered [[TETHER]] effect cannot be dodged."],
    },
    leblanc: {
      ko: ["E의 [[ROOT]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["LeBlanc's E [[ROOT]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
