// app/data/matchups/caitlyn/caitlyn_rell.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_rell: MatchupSummary = {
  champs: ["caitlyn", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 렐 승마폼 W의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음.",
        "W([[TRAP]])의 [[ROOT]]으로 렐 낙마폼 W의 [[TRANSFORM]]으로 [[EMPOWERED]] [[BA]]의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Rell's Mounted Form W [[DASH]]. \n However, the [[ROOT]] and headshot still apply.",
        "Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt the [[EMPOWERED]] [[BA]] [[DASH]] granted by Rell's Dismounted Form W's [[TRANSFORM]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
