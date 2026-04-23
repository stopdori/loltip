// app/data/matchups/azir/azir_bard.ts
import type { MatchupSummary } from "../_types";

export const azir_bard: MatchupSummary = {
  champs: ["azir", "bard"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 바드 E(터널)의 [[SKILL_CHAANEL]] [[DASH]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Bard's E(Tunnel) [[SKILL_CHAANEL]] [[DASH]]."],
    },
    bard: {
      ko: ["바드 Q의 [[STUN]]로 아지르 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "바드 R(존야)로 아지르 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Bard's Q [[STUN]] cannot interrupt Azir's E [[DASH]]. \n However, [[STUN]] still applies.",
        "Bard's R(Zhonya's) can interrupt Azir's E [[DASH]]."],
    },
  },
};
