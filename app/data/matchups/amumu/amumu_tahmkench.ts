// app/data/matchups/amumu/amumu_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const amumu_tahmkench: MatchupSummary = {
  champs: ["amumu", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 탐켄치 W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 탐켄치 Q의 [[STUN]], W의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로도 탐켄치 R을 아무무가 맞고 Q가 제3자에게 적중해도 벗어날 수 없음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Tahm Kench's W [[SKILL_CHANNEL]].", "Amumu's Q [[CC_BUFFER]] can ignore Tahm Kench's Q [[STUN]] and W [[AIRBORNE]] and continue [[DASH]].", "Amumu's Q [[CC_BUFFER]] cannot help Amumu escape Tahm Kench's R — even if Q lands on a third party, Amumu cannot escape."],
    },
    tahmkench: {
      ko: [],
      en: [],
    },
  },
};
