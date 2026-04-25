// app/data/matchups/bard/bard_ekko.ts
import type { MatchupSummary } from "../_types";

export const bard_ekko: MatchupSummary = {
  champs: ["bard", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 에코 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "바드 R(존야)로 에코 E의 [[DASH]]을 끊을 수 있음. \n 단, 에코 E의 대기 단계에 존야를 맞으면 에코가 존야상태가 되지만 [[BLINK]]으로 대상을 따라가서 공격."],
      en: [""],
    },
    ekko: {
      ko: [],
      en: [],
    },
  },
};
