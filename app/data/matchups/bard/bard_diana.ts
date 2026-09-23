// app/data/matchups/bard/bard_diana.ts
import type { MatchupSummary } from "../_types";

export const bard_diana: MatchupSummary = {
  champs: ["bard", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 다이애나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 다이애나 E의 [[DASH]]을 끊을 수 있음."],
      en: [""],
    },
    diana: {
      ko: ["R의 [[GRAB]]으로 바드 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Bard's E (wall-travel) [[SKILL_CHANNEL]] [[DASH]]."],
    },
  },
};
