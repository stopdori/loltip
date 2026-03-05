// app/data/matchups/alistar/alistar_samira.ts
import type { MatchupSummary } from "../_types";

export const alistar_samira: MatchupSummary = {
  champs: ["alistar", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 사미라 E를 끊을 수 있음\n알리스타 Q, W, E로 사미라 R를 끊을 수 있음", "알리스타 E의 [[STUN]]로 사미라 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 사미라 P의 [[AIRBORNE]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt 사미라 E를 끊을 수 있음\\\\n알리스타 Q, W, E로 사미라 R", "Alistar's E [[STUN]] cannot interrupt 사미라 E. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Samira's P [[AIRBORNE]]"],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
