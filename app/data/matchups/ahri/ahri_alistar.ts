// app/data/matchups/ahri/ahri_alistar.ts
import type { MatchupSummary } from "../_types";

export const ahri_alistar: MatchupSummary = {
  champs: ["ahri", "alistar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Alistar's W [[DASH]]."],
    },
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 아리 R의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 아리 E의 [[CHARM]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Ahri's R [[DASH]].", "E [[STUN]] cannot interrupt Ahri's R [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Ahri's E [[CHARM]]."],
    },
  },
};
