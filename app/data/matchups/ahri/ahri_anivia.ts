// app/data/matchups/ahri/ahri_anivia.ts
import type { MatchupSummary } from "../_types";

export const ahri_anivia: MatchupSummary = {
  champs: ["ahri", "anivia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아리 E의 [[CHARM]]이 에니비아 P(알)에 사용했을 때 애니비아가 [[REVIVE]] 한다면, [[CHARM]]이 남아있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Anivia's R [[SKILL_CHANNEL]].", "If Ahri's E [[CHARM]] hits Anivia's P (egg) and Anivia [[REVIVE]]s, the [[CHARM]] remains active."],
    },
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Ahri's R [[DASH]]. However, the [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
