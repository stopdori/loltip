// app/data/matchups/akali/akali_alistar.ts
import type { MatchupSummary } from "../_types";

export const akali_alistar: MatchupSummary = {
  champs: ["akali", "alistar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[DASH]]으로 알리스타 W의 [[DASH]]을 따라 갈 수 있음."],
      en: ["E2 [[DASH]] can follow Alistar's W [[DASH]]."],
    },
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
      "알리스타 R의 [[CC_CLEANSE]]로 아칼리 Q의 [[SLOW]]를 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Akali's E1, E2, R1, and R2 [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Akali's E1, E2, R1, or R2 [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can remove Akali's Q [[SLOW]]."],
    },
  },
};
