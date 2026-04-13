// app/data/matchups/aatrox/aatrox_belveth.ts
import type { MatchupSummary } from "../_types";

export const aatrox_belveth: MatchupSummary = {
  champs: ["aatrox", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 벨베스 Q의 [[DASH]], W([[SKILL_CHANNEL]])를 끊을 수 있음.", 
        "아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 벨베스 R의 [[CAST_COMMIT]]을 멈출 수 없음."],
      en: ["Aatrox's Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Bel'Veth's Q [[DASH]] and W [[SKILL_CHANNEL]].", "Aatrox's Q [[AIRBORNE]] and W's [[GRAB]] effect cannot stop Bel'Veth's R [[CAST_COMMIT]]."],
    },
    belveth: {
      ko: [],
      en: [],
    },
  },
};
