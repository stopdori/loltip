// app/data/matchups/camille/camille_talon.ts
import type { MatchupSummary } from "../_types";

export const camille_talon: MatchupSummary = {
  champs: ["camille", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 탈론 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 탈론 Q(근접, [[DASH]] 공격), W, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Talon's E (wall traversal) [[SKILL_CHANNEL]] [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Talon's Q (melee, [[DASH]] attack), W, and R."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
