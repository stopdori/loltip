// app/data/matchups/amumu/amumu_nami.ts
import type { MatchupSummary } from "../_types";

export const amumu_nami: MatchupSummary = {
  champs: ["amumu", "nami"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 나미 R의 [[SKILL_CHANNEL]]을 끊을 수 없음.", "아무무 Q의 [[CC_BUFFER]]로 나미 Q의 [[SUSPENDING]], R의 [[AIRBORNE]] [[SLOW]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]], [[SLOW]]는 남아있음."],
      en: ["Amumu's Q and R [[STUN]] cannot interrupt Nami's R [[SKILL_CHANNEL]].", "Amumu's Q [[CC_BUFFER]] can ignore Nami's Q [[SUSPENDING]] and R [[AIRBORNE]] [[SLOW]] and continue [[DASH]]. \n However, the [[STUN]] and [[SLOW]] still apply."],
    },
    nami: {
      ko: [],
      en: [],
    },
  },
};
