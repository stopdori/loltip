// app/data/matchups/alistar/alistar_qiyana.ts
import type { MatchupSummary } from "../_types";

export const alistar_qiyana: MatchupSummary = {
  champs: ["alistar", "qiyana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 키아나 W, E의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 키아나 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 키아나 물Q의 [[ROOT]], R의 [[AIRBORNE]] [[STUN]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Qiyana's W and E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Qiyana's W or E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Qiyana's Q (Water) [[ROOT]] and R [[AIRBORNE]][[STUN]]."],
    },
    qiyana: {
      ko: [],
      en: [],
    },
  },
};
