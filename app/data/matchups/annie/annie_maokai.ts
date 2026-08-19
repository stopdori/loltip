// app/data/matchups/annie/annie_maokai.ts
import type { MatchupSummary } from "../_types";

export const annie_maokai: MatchupSummary = {
  champs: ["annie", "maokai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["R로 [[SUMMON]]된 티버로 마오카이 E(묘목) [[TRAP]]을 제거할 수 있음."],
      en: ["R [[SUMMON]]ed Tibbers can destroy Maokai's E(Sapling) [[TRAP]]."],
    },
    maokai: {
      ko: ["Q의 [[KNOCKBACK]]으로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]] 할 수 있음."],
      en: ["Maokai's Q [[KNOCKBACK]] can knock back Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
