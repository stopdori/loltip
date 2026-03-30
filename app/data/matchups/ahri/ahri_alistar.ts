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
      ko: ["아리 E의 [[CHARM]]으로 알리스타 W를 끊을 수 있음. 즉, 데미지도 무효."],
      en: ["Ahri's E can interrupt Alistar's W"],
    },
    alistar: {
      ko: ["알리스타 Q, W의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음.", "알리스타 E의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "알리스타 R의 [[CC_CLEANSE]]로 아리 E의 [[CHARM]]을 해제할 수 있음."],
      en: ["Alistar's Q and W can interrupt Ahri's R", "Alistar's E [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Ahri's E [[CHARM]]"],
    },
  },
};
