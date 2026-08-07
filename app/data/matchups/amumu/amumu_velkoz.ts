// app/data/matchups/amumu/amumu_velkoz.ts
import type { MatchupSummary } from "../_types";

export const amumu_velkoz: MatchupSummary = {
  champs: ["amumu", "velkoz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q, R의 [[STUN]]로 벨코즈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 벨코즈 E의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Q and R [[STUN]] can interrupt Vel'Koz's R [[SKILL_CHANNEL]].", "Q [[CC_BUFFER]] can ignore Vel'Koz's E [[AIRBORNE]] and continue [[DASH]]."],
    },
    velkoz: {
      ko: [],
      en: [],
    },
  },
};
