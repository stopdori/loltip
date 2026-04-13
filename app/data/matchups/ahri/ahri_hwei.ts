// app/data/matchups/ahri/ahri_hwei.ts
import type { MatchupSummary } from "../_types";

export const ahri_hwei: MatchupSummary = {
  champs: ["ahri", "hwei"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [],
      en: [],
    },
    hwei: {
      ko: ["흐웨이 EQ의 [[FEAR]], EE의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음.", "흐웨이 EW의 [[ROOT]]으로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Hwei's EQ [[FEAR]] and EE [[AIRBORNE]] can interrupt Ahri's R [[DASH]].", "Hwei's EW [[ROOT]] cannot interrupt Ahri's R [[DASH]]. However, the [[ROOT]] still applies."],
    },
  },
};
