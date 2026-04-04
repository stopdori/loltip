// app/data/matchups/akshan/akshan_aurora.ts
import type { MatchupSummary } from "../_types";

export const akshan_aurora: MatchupSummary = {
  champs: ["akshan", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akshan: {
      ko: ["아크샨 R의 [[TRUE_SIGHT]]로 오로라 W의 [[INVISIBILITY]]를 볼 수 있음"],
      en: ["Akshan's R [[TRUE_SIGHT]] can reveal Aurora's W [[INVISIBILITY]]"],
    },
    aurora: {
      ko: ["오로라 R(세계의 경계)로 아크샨 R을 시전 취소시키거나, 투사체를 무효화할 수 있음.\n단, 경우에 따라 투사체가 따라오기도 함.\n투사체 무효화 방법은 [[UNTARGETABLE]] 상태일 때 투사체와 접촉하면 사라짐."],
      en: ["Aurora cannot dodge Akshan's R (projectiles) with her R's teleport. All projectiles will follow her"],
    },
  },
};
