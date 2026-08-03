// app/data/matchups/ahri/ahri_jarvaniv.ts
import type { MatchupSummary } from "../_types";

export const ahri_jarvaniv: MatchupSummary = {
  champs: ["ahri", "jarvaniv"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 자르반 EQ(깃창)의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Jarvan IV's EQ (flag-toss combo) [[DASH]]."],
    },
    jarvaniv: {
      ko: ["자르반 EQ의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음.", "자르반 R의 [[UNSTOPPABLE]]로 아리 E의 [[CHARM]]을 무시할 수 있음. \n 단, [[CHARM]]은 남아있음."],
      en: ["Jarvan IV's EQ [[AIRBORNE]] can interrupt Ahri's R [[DASH]].", "Jarvan IV's R [[UNSTOPPABLE]] allows him to ignore Ahri's E [[CHARM]]. \n However, the [[CHARM]] still applies."],
    },
  },
};
