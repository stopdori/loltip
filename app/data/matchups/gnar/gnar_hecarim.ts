// app/data/matchups/gnar/gnar_hecarim.ts
import type { MatchupSummary } from "../_types";

export const gnar_hecarim: MatchupSummary = {
  champs: ["gnar", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gnar: {
      ko: [""],
      en: [""],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 나르 미니폼 / 메가폼 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 나르 메가폼 W의 [[STUN]], R의 [[KNOCKBACK]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Gnar's Mini form / Mega form E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Gnar's mega form W [[STUN]] and R [[KNOCKBACK]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
