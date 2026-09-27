// app/data/matchups/anivia/anivia_rakan.ts
import type { MatchupSummary } from "../_types";

export const anivia_rakan: MatchupSummary = {
  champs: ["anivia", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 라칸 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] and W ([[TERRAIN]]) [[AIRBORNE]] can interrupt Rakan's W and E [[DASH]]."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]], R의 [[CHARM]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[AIRBORNE]] and R [[CHARM]] can interrupt Anivia's R [[SKILL_CHANNEL]]. [[EXIST]]"],
    },
  },
};
