// app/data/matchups/alistar/alistar_kaisa.ts
import type { MatchupSummary } from "../_types";

export const alistar_kaisa: MatchupSummary = {
  champs: ["alistar", "kaisa"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 카이사 R의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 카이사 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Kai'Sa's R [[DASH]].", "E [[STUN]] cannot interrupt Kai'Sa's R [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    kaisa: {
      ko: [],
      en: [],
    },
  },
};
