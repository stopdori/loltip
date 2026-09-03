// app/data/matchups/bard/bard_hecarim.ts
import type { MatchupSummary } from "../_types";

export const bard_hecarim: MatchupSummary = {
  champs: ["bard", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 헤카림 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "바드 R(존야)로 헤카림 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Bard's Q [[STUN]] cannot interrupt Hecarim's E [[DASH]]. \n However, [[STUN]] still applies.",
        "Bard's R (Zhonya's) can interrupt Hecarim's E [[DASH]]."],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 바드 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 바드 Q의 [[STUN]], R(존야)의 [[STASIS]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Bard's E (wall-travel) [[SKILL_CHANNEL]] [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Bard's Q [[STUN]] and R (Zhonya's) [[STASIS]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
