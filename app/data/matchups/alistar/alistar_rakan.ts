// app/data/matchups/alistar/alistar_rakan.ts
import type { MatchupSummary } from "../_types";

export const alistar_rakan: MatchupSummary = {
  champs: ["alistar", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 라칸 W, E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 라칸 W의 [[AIRBORNE]], R의 [[CHARM]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Rakan's W and E [[DASH]].", "R [[CC_CLEANSE]] can cleanse Rakan's W [[AIRBORNE]] and R [[CHARM]]."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음. [[EXIST]]",
        "R의 [[CHARM]]으로 알리스타 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[AIRBORNE]] can interrupt Alistar's W [[DASH]]. [[EXIST]]", "R [[CHARM]] cannot interrupt Alistar's W [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
