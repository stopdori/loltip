// app/data/matchups/caitlyn/caitlyn_zeri.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_zeri: MatchupSummary = {
  champs: ["caitlyn", "zeri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 제리 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]] 을 끊을 수 있음.",
      "활성화된 W([[TRAP]])의 [[ROOT]]으로 제리 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Zeri's E (Wall-hop) [[SKILL_CHANNEL]] [[DASH]].",
        "Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Zeri's E [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    zeri: {
      ko: [],
      en: [],
    },
  },
};
