// app/data/matchups/caitlyn/caitlyn_vayne.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_vayne: MatchupSummary = {
  champs: ["caitlyn", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 베인 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음.",
        "활성화된 W([[TRAP]])의 [[TRUE_SIGHT]]로 베인 RQ의 [[INVISIBILITY]] 상태를 볼 수 있음.",
      "R의 [[TRUE_SIGHT]]로 베인 RQ의 [[INVISIBILITY]] 상태를 볼 수 있음. \n R의 [[PROJECTILE]]가 적중하면 종료."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Vayne's Q [[DASH]]. \n However, the [[ROOT]] and headshot still apply.",
        "Caitlyn's activated W's ([[TRAP]]) [[TRUE_SIGHT]] can see Vayne under RQ [[INVISIBILITY]].",
        "Caitlyn's R [[TRUE_SIGHT]] can see Vayne under RQ [[INVISIBILITY]]. \n This ends once R's [[PROJECTILE]] hits."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
