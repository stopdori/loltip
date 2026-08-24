// app/data/matchups/camille/camille_khazix.ts
import type { MatchupSummary } from "../_types";

export const camille_khazix: MatchupSummary = {
  champs: ["camille", "khazix"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 카직스 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 카직스 W, E을 피할 수 있음. \n 단, 카직스 R은 취소될 수 있음. [[COOLDOWN]] 소모 없음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Kha'Zix's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Kha'Zix's W and E. \n However, Kha'Zix's R can be cancelled, with no [[COOLDOWN]] consumed."],
    },
    khazix: {
      ko: [],
      en: [],
    },
  },
};
