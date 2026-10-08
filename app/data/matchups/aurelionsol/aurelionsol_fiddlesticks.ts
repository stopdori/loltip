// app/data/matchups/aurelionsol/aurelionsol_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_fiddlesticks: MatchupSummary = {
  champs: ["aurelionsol", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] and R (Falling Star) [[AIRBORNE]] can interrupt Fiddlesticks's W and R [[SKILL_CHANNEL]]."],
    },
    fiddlesticks: {
      ko: ["Q(패시브, 액티브)의 [[FEAR]]로 아우렐리온 솔 W의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 있음. [[EXIST]]", 
        "E의 [[SILENCE]]으로 아우렐리온 솔 W의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[SILENCE]]은 남아있음.", 
        "Q(패시브, 액티브)의 [[FEAR]] / E의 [[SILENCE]]으로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
