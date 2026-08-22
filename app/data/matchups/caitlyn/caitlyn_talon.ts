// app/data/matchups/caitlyn/caitlyn_talon.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_talon: MatchupSummary = {
  champs: ["caitlyn", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 탈론 Q, E(벽넘기)의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음.",
        "활성화된 W([[TRAP]])의 [[TRUE_SIGHT]]로 탈론 R의 [[INVISIBILITY]] 상태를 볼 수 있음.",
      "R의 [[TRUE_SIGHT]]로 탈론 R의 [[INVISIBILITY]] 상태를 볼 수 있음. \n R의 [[PROJECTILE]]가 적중하면 종료."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Talon's Q or E (Wall-hop) [[DASH]]. \n However, the [[ROOT]] and headshot still apply.",
        "Caitlyn's activated W's ([[TRAP]]) [[TRUE_SIGHT]] can see Talon under R [[INVISIBILITY]].",
        "Caitlyn's R [[TRUE_SIGHT]] can see Talon under R [[INVISIBILITY]]. \n This ends once R's [[PROJECTILE]] hits."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
