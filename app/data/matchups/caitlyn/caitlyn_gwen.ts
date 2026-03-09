// app/data/matchups/caitlyn/caitlyn_gwen.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_gwen: MatchupSummary = {
  champs: ["caitlyn", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["케이틀린 R을 그웬에게 시전집중 할 때, 그웬이 W를 범위 밖에서 사용하면 케이틀린 R이 취소 됨\n케이틀린 R을 그웬에게 사용하여 발사 됐을 때, 그웬이 W를 범위 밖에서 사용하면 날아가던 중 범위 안에 들어갈 때 사라짐"],
      en: ["When Caitlyn is channeling R on Gwen, if Gwen uses W from outside the zone, Caitlyn's R is cancelled\\nWhen Caitlyn's R has been fired at Gwen, if Gwen uses W from outside the zone, the projectile disappears when it enters the zone mid-flight"],
    },
    gwen: {
      ko: ["그웬 W로 케이틀린 평타, Q, E, R을 범위 밖에서 맞지 않음\n그웬에게 사용한 평타, R은 날아가던 중 범위 안에 들어올 때 사라짐"],
      en: ["Gwen's W prevents Caitlyn's 평타, Q, E and R from hitting when outside the zone\\n평타, R aimed at Gwen disappear when they enter the zone mid-flight"],
    },
  },
};
