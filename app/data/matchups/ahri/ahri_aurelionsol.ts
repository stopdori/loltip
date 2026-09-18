// app/data/matchups/ahri/ahri_aurelionsol.ts
import type { MatchupSummary } from "../_types";

export const ahri_aurelionsol: MatchupSummary = {
  champs: ["ahri", "aurelionsol"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 아우렐리온 솔 Q, W의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "E([[CHARM]])의 [[KNOCKDOWN]]으로 아우렐리온 솔 W(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. [[EXIST]] \n 단, 아우렐리온 솔 W는 즉시 벽에서 가장 가까운 땅으로 이동."],
      en: ["E [[CHARM]] can interrupt Aurelion Sol's Q and W [[SKILL_CHANNEL]]. [[EXIST]]",
        "E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Aurelion Sol's W (wall traversal) [[SKILL_CHANNEL]] [[DASH]]. [[EXIST]] \n However, his W is immediately ejected to the nearest ground next to the wall."],
    },
    aurelionsol: {
      ko: ["R의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "[[EMPOWERED]] R(천상 강림)의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Ahri's R [[DASH]]. \n However, the [[STUN]] still applies.", "[[EMPOWERED]] R (Falling Star) [[AIRBORNE]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
