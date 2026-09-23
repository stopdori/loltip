// app/data/matchups/gragas/gragas_rakan.ts
import type { MatchupSummary } from "../_types";

export const gragas_rakan: MatchupSummary = {
  champs: ["gragas", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gragas: {
      ko: ["그라가스 E, R로 라칸 W, E를 끊을 수 있음"],
      en: ["Gragas's E or R can interrupt Rakan's W or E"],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 그라가스 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 그라가스 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음.", ],
      en: [],
    },
  },
  common: {
    ko: ["라칸 R의 [[CHARM]]과 그라가스 E의 [[KNOCKBACK]]이 부딪히면 \n 그라가스 E가 먼저 적중하고 라칸 R이 적중."],
    en: [],
  },
};
