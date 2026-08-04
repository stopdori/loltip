// app/data/matchups/ambessa/ambessa_gnar.ts
import type { MatchupSummary } from "../_types";

export const ambessa_gnar: MatchupSummary = {
  champs: ["ambessa", "gnar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 나르 미니폼 / 메가폼 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 나르 메가폼 W의 [[STUN]] / R의 [[KNOCKBACK]], [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Gnar's Mini form / Mega form E [[DASH]].", "R [[UNSTOPPABLE]] can ignore Gnar's Mega form W [[STUN]] and R [[KNOCKBACK]] [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    gnar: {
      ko: [],
      en: [],
    },
  },
};
