// app/data/matchups/aatrox/aatrox_hecarim.ts
import type { MatchupSummary } from "../_types";

export const aatrox_hecarim: MatchupSummary = {
  champs: ["aatrox", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: [],
      en: [],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 무시할 수 있음."
      ],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Aatrox's E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Aatrox's Q [[AIRBORNE]] and W [[GRAB]]."
      ],
    },
  },
};
