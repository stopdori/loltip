// app/data/matchups/camille/camille_zac.ts
import type { MatchupSummary } from "../_types";

export const camille_zac: MatchupSummary = {
  champs: ["camille", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 자크 Q, E의 [[AIRBORNE]] / R의 [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 자크 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 자크 Q, W, E, R을 피할 수 있음. \n 단, Q의 [[PROJECTILE]]에 맞으면 발동하는 [[TETHER]] 효과는 남아있음. \n Q 발동 효과를 카밀은 이론상 피할 수 없음. [[CLIP:https://www.youtube.com/shorts/5AFC_omdcFY]]"],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Zac's Q and E [[AIRBORNE]] / R [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Zac's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Zac's Q, W, E, and R. \n However, if hit by Q's [[PROJECTILE]], the triggered [[TETHER]] effect still remains. \n In theory, Camille cannot dodge Q's triggered effect. [[CLIP:https://www.youtube.com/shorts/5AFC_omdcFY]]"],
    },
    zac: {
      ko: ["Q, E의 [[AIRBORNE]] / R의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Zac's Q and E [[AIRBORNE]] / R [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
