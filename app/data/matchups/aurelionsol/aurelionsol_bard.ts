// app/data/matchups/aurelionsol/aurelionsol_bard.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_bard: MatchupSummary = {
  champs: ["aurelionsol", "bard"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 바드 E(벽이동)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 바드 E(벽이동)의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Bard's E (wall travel) [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Bard's E (wall travel) [[DASH]]."],
    },
    bard: {
      ko: ["바드 Q의 [[STUN]]로 아우렐리온 솔 Q, W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "바드 R(존야)로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]], W의 [[DASH]]을 끊을 수 있음."],
      en: ["Bard's Q [[STUN]] can interrupt Aurelion Sol's Q and W [[SKILL_CHANNEL]].",
        "Bard's R (Zhonya) can interrupt Aurelion Sol's Q [[SKILL_CHANNEL]] and W [[DASH]]."],
    },
  },
};
