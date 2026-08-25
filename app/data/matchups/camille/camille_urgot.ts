// app/data/matchups/camille/camille_urgot.ts
import type { MatchupSummary } from "../_types";

export const camille_urgot: MatchupSummary = {
  champs: ["camille", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 우르곳 E의 [[GRAB]], [[STUN]] / R의 [[FEAR]]를 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음. \n 단, [[FEAR]]가 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.", 
        "E1( 투척 단계 )의 [[CC_BUFFER]]로도 우르곳 R2의 [[SUPPRESS]]을 무시할 수 없음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 우르곳 W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 우르곳 Q의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 우르곳 평타, Q, W, E, R을 피할 수 있음.", 
        "[[TIP]]R의 [[UNTARGETABLE]]로 우르곳 R2를 피할 수 없음. \n 1. 카밀이 [[UNTARGETABLE]] 상태일 때는 우르곳 R2가 비활성화 되고. \n 2. 우르곳이 R2를 사용해서 발동하는 순간 카밀은 즉시 [[SUPPRESS]]되어 카밀이 R을 사용할 수 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Urgot's E [[GRAB]], [[STUN]] / R [[FEAR]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled. \n However, if the [[FEAR]] remains until the E1 (Hold phase), Camille's E is cancelled.",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] cannot ignore Urgot's R2 [[SUPPRESS]] either.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Urgot's W [[SKILL_CHANNEL]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Urgot's Q [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Urgot's auto-attacks, Q, W, E, and R.",
        "[[TIP]]Camille's R [[UNTARGETABLE]] cannot dodge Urgot's R2. \n 1. While Camille is [[UNTARGETABLE]], Urgot's R2 is disabled. \n 2. The moment Urgot uses R2 and it activates, Camille is immediately [[SUPPRESS]]ed, so she cannot use R."
      ],
    },
    urgot: {
      ko: ["E의 [[CC_BUFFER]]로 카밀 E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]을 무시하고 E의 [[DASH]]을 할 수 있음. \n 단, 카밀 R의 [[ZONE]] 범위 밖으로 E의 [[DASH]] 하면, 강제로 [[ZONE]] [[AOE]] 안으로 [[GRAB]]되어 돌아올 수 있음.",
        "E의 [[GRAB]], R의 [[FEAR]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Urgot's E [[CC_BUFFER]] can ignore Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] and continue the E [[DASH]]. \n However, if the E [[DASH]] moves outside of Camille's R [[ZONE]] range, Urgot can be forcibly [[GRAB]]bed back into the [[ZONE]] [[AOE]].",
        "Urgot's E [[GRAB]] and R [[FEAR]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
