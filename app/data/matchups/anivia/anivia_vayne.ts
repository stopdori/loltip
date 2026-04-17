// app/data/matchups/anivia/anivia_vayne.ts
import type { MatchupSummary } from "../_types";

export const anivia_vayne: MatchupSummary = {
  champs: ["anivia", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 베인 Q(구르기)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 베인 Q(구르기)의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Vayne's Q (Tumble) [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Vayne's Q (Tumble) [[DASH]]."],
    },
    vayne: {
      ko: ["베인 E의 [[KNOCKBACK]]을 애니비아 W([[TERRAIN]])에 사용하여 [[STUN]]을 발동 시킬 수 있음."],
      en: ["Vayne's E [[KNOCKBACK]] can be used against Anivia's W [[TERRAIN]] to trigger [[STUN]]."],
    },
  },
};
