// app/data/matchups/aatrox/aatrox_bard.ts
import type { MatchupSummary } from "../_types";

export const aatrox_bard: MatchupSummary = {
  champs: ["aatrox", "bard"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q의 [[STUN]], W의 [[GRAB]] 효과로 바드 E(터널)의 [[DASH]]을 끊을 수 있음."],
      en: ["Aatrox's Q [[STUN]] and W's [[GRAB]] effect can interrupt Bard's E portal travel [[DASH]]."],
    },
    bard: {
      ko: ["바드 Q의 [[STUN]]로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 아트록스 Q1, Q2, Q3를 끊을 수 없음. 존야에 걸려도 스킬이 유지."],
      en: [],
    },
  },
};
