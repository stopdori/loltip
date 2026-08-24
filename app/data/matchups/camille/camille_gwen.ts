// app/data/matchups/camille/camille_gwen.ts
import type { MatchupSummary } from "../_types";

export const camille_gwen: MatchupSummary = {
  champs: ["camille", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 그웬 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]]로 그웬 Q, R을 피할 수 있음.",],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Gwen's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Gwen's Q and R."],
    },
    gwen: {
      ko: ["W의 [[AOE]] 밖에서 발동하는 [[UNTARGETABLE]]로 카밀 W를 무시할 수 있음.",
        "W의 [[AOE]] 밖에서 발동하는 [[UNTARGETABLE]]로 카밀 R의 [[KNOCKBACK]]을 무시할 수 있음."
      ],
      en: ["Gwen's W (Hallowed Mist) [[UNTARGETABLE]] triggered outside the mist can ignore Camille's W.",
        "Gwen's W (Hallowed Mist) [[UNTARGETABLE]] triggered outside the mist can ignore Camille's R [[KNOCKBACK]]."
      ],
    },
  },
};
