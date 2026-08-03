// app/data/matchups/aatrox/aatrox_aurelionsol.ts
import type { MatchupSummary } from "../_types";

export const aatrox_aurelionsol: MatchupSummary = {
  champs: ["aatrox", "aurelionsol"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 아우렐리온 솔 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Aurelion Sol's W [[DASH]]."],
    },
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt Aatrox's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt Aatrox's E [[DASH]]."],
    },
  },
};
