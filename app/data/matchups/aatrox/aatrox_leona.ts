// app/data/matchups/aatrox/aatrox_leona.ts
import type { MatchupSummary } from "../_types";

export const aatrox_leona: MatchupSummary = {
  champs: ["aatrox", "leona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 레오나 E(돌진단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[GRAB]] can interrupt Leona's E [[DASH]] (charge phase)."],
    },
    leona: {
      ko: ["레오나 E의 [[ROOT]]와 Q, R의 [[STUN]]로 아트록스 E의 [[DASH]]를 끊을 수 없음. \n 단, [[ROOT]], [[STUN]]은 남아있음"],
      en: ["Leona's E [[ROOT]] and Q/R [[STUN]] cannot interrupt Aatrox's E. However, the [[ROOT]] and [[STUN]] still apply."],
    },
  },
};
