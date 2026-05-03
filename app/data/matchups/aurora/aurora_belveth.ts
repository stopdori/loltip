// app/data/matchups/aurora/aurora_belveth.ts
import type { MatchupSummary } from "../_types";

export const aurora_belveth: MatchupSummary = {
  champs: ["aurora", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]으로 벨베스 W의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Aurora's E (ready phase) [[CC_BUFFER]] and R [[UNSTOPPABLE]] [[DASH]] can ignore Bel'Veth's W [[AIRBORNE]] and continue [[DASH]]ing."],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Aurora's W and E [[DASH]]."],
    },
  },
};
