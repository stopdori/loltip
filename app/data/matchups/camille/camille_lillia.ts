// app/data/matchups/camille/camille_lillia.ts
import type { MatchupSummary } from "../_types";

export const camille_lillia: MatchupSummary = {
  champs: ["camille", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 릴리아 R의 [[SLEEP]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[SLEEP]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 릴리아 W의 [[DASH]]을 끊을 수 있음.", 
        "[[TIP]]R의 [[UNTARGETABLE]], [[UNSTOPPABLE]]로 릴리아 Q, W, E, R의 [[DROWSY]] [[PROJECTILE]], R의 [[SLEEP]]을 피할 수 있음. [[CLIP:https://www.youtube.com/shorts/26nkB6it8S8]]"
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Lillia's R [[SLEEP]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[SLEEP]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Lillia's W [[DASH]].",
        "[[TIP]]Camille's R [[UNTARGETABLE]], [[UNSTOPPABLE]] can dodge Lillia's Q, W, E, and R [[DROWSY]] [[PROJECTILE]], and R's [[SLEEP]]. [[CLIP:https://www.youtube.com/shorts/26nkB6it8S8]]"
      ],
    },
    lillia: {
      ko: ["R의 [[DROWSY]], [[SLEEP]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[SLEEP]]은 남아있음."],
      en: ["Lillia's R [[DROWSY]] and [[SLEEP]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[SLEEP]] still applies."],
    },
  },
};
