// app/data/matchups/akshan/akshan_gwen.ts
import type { MatchupSummary } from "../_types";

export const akshan_gwen: MatchupSummary = {
  champs: ["akshan", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akshan: {
      ko: ["아크샨 R을 그웬에게 [[SKILL_CHANNEL]] 중일 때, \n 그웬이 W를 아크샨 범위 밖에서 사용하면 아크샨 R의 [[SKILL_CHANNEL]] 취소. [[CLIP:https://www.youtube.com/shorts/pjnu6tD4akw]]"],
      en: ["While Akshan is [[SKILL_CHANNEL]]ing R on Gwen, \n if Gwen uses W outside Akshan's range, Akshan's R [[SKILL_CHANNEL]] is cancelled. [[CLIP:https://www.youtube.com/shorts/pjnu6tD4akw]]"],
    },
    gwen: {
      ko: ["그웬 W로 아크샨 평타, Q, R의 [[PROJECTILE]]를 범위 밖에서 맞지 않음. \n 즉, [[PROJECTILE]]가 날아가던 중 그웬 W의 범위 안에 들어갈 때 사라짐. [[CLIP:https://www.youtube.com/shorts/z--7YBJxQ70]]"],
      en: ["Gwen's W avoids Akshan's basic attacks, Q, and R [[PROJECTILE]] from outside the range. \n In other words, the [[PROJECTILE]] disappears when it enters Gwen's W range while in flight. [[CLIP:https://www.youtube.com/shorts/z--7YBJxQ70]]"],
    },
  },
};
