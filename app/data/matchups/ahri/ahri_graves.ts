// app/data/matchups/ahri/ahri_graves.ts
import type { MatchupSummary } from "../_types";

export const ahri_graves: MatchupSummary = {
  champs: ["ahri", "graves"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 W를 사용했을 때, 그브 W의 [[NEARSIGHT]]에 당하면 아리의 시야가 축소되어 W가 날아가기 힘들어짐.", "아리 E의 [[CHARM]]으로 그브 E(빨리 뽑기)를 끊을 수 있음.", "아리 E의 [[CHARM]]으로 그레이브즈 R의 [[CAST_COMMIT]]을 멈출 수 없음.", "아리 E의 [[CHARM]]으로 그브 R(준비 단계)을 끊을 수 없음.\n단, [[CHARM]]은 남아있음.", "아리 E의 [[CHARM]]으로 그브 R(후진 단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["When Ahri uses W, Graves's W [[NEARSIGHT]] reduces Ahri's vision, making it harder to land W.", "Ahri's E can interrupt Graves's E (Quick Draw)", "Ahri's E [[CHARM]] cannot stop Graves's R [[CAST_COMMIT]].", "Ahri's E cannot interrupt Graves's R (setup phase). However, the [[CHARM]] still applies.", "Ahri's E can interrupt Graves's R (backstep phase)"],
    },
    graves: {
      ko: [],
      en: [],
    },
  },
};
