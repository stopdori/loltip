// app/data/matchups/fiddlesticks/fiddlesticks_gwen.ts
import type { MatchupSummary } from "../_types";

export const fiddlesticks_gwen: MatchupSummary = {
  champs: ["fiddlesticks", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fiddlesticks: {
      ko: ["Q(패시브, 액티브)의 [[FEAR]] / E의 [[SILENCE]]으로 그웬 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[FEAR]], [[SILENCE]]은 남아있음."],
      en: [""],
    },
    gwen: {
      ko: ["그웬 W로 피들스틱 평타, Q, E, R을 범위 밖에서 맞지 않음\n평타, Q는 날아가던 중 범위 안에 들어올 때 사라짐"],
      en: ["Gwen's W prevents Fiddlesticks's 평타, Q, E and R from hitting when outside the zone\\nAuto attacks and Q disappear when they enter the zone mid-flight"],
    },
  },
};
