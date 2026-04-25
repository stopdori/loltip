// app/data/matchups/bard/bard_vi.ts
import type { MatchupSummary } from "../_types";

export const bard_vi: MatchupSummary = {
  champs: ["bard", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]], R(존야)로 바이 Q의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: [""],
    },
    vi: {
      ko: ["바이 R의 [[UNSTOPPABLE]] [[DASH]]으로 바드 R(존야)을 무시할 수 있음. \n 단, 바이 R을 시전한 대상에게 존야를 맞히면 바이 R이 취소되고 쿨타임을 소모."],
      en: [],
    },
  },
};
