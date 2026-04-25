// app/data/matchups/bard/bard_zaahen.ts
import type { MatchupSummary } from "../_types";

export const bard_zaahen: MatchupSummary = {
  champs: ["bard", "zaahen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 자헨 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "바드 R(존야)로 자헨 E의 [[DASH]]을 끊을 수 있음."],
      en: [""],
    },
    zaahen: {
      ko: ["자헨 R의 [[CC_IMMUNE]] [[UNSTOPPABLE]] [[DASH]]으로 바드 R(존야)을 무시할 수 있음."],
      en: [],
    },
  },
};
