// app/data/matchups/aurelionsol/aurelionsol_evelynn.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_evelynn: MatchupSummary = {
  champs: ["aurelionsol", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Evelynn's [[EMPOWERED]] E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Evelynn's [[EMPOWERED]] E [[DASH]]."],
    },
    evelynn: {
      ko: ["W의 [[CHARM]]으로 아우렐리온 솔 Q, W(일반, 벽이동)의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]] \n 단, 아우렐리온 솔 W(벽이동)는 즉시 벽에서 가장 가까운 땅으로 이동."],
      en: ["W [[CHARM]] can interrupt Aurelion Sol's Q and W (normal, wall traversal) [[SKILL_CHANNEL]]. [[EXIST]] \n However, Aurelion Sol's W (wall traversal) is immediately ejected to the nearest ground next to the wall."],
    },
  },
};
