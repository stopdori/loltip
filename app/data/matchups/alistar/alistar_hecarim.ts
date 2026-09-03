// app/data/matchups/alistar/alistar_hecarim.ts
import type { MatchupSummary } from "../_types";

export const alistar_hecarim: MatchupSummary = {
  champs: ["alistar", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 헤카림 E의 [[DASH]]을 끊을 수 있음.", 
         "R의 [[CC_CLEANSE]]로 헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Hecarim's E [[DASH]].", "R [[CC_CLEANSE]] can cleanse Hecarim's E [[KNOCKBACK]] and R [[FEAR]]."],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."
      ],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Alistar's W [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]] and E [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."
      ],
    },
  },
};
