// app/data/matchups/lissandra/lissandra_talon.ts
import type { MatchupSummary } from "../_types";

export const lissandra_talon: MatchupSummary = {
  champs: ["lissandra", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 탈론 E(벽이동)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 탈론 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Talon's E (wall movement) [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Talon's E [[DASH]]. [[EXIST]]"],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
