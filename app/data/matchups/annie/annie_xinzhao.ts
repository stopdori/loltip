// app/data/matchups/annie/annie_xinzhao.ts
import type { MatchupSummary } from "../_types";

export const annie_xinzhao: MatchupSummary = {
  champs: ["annie", "xinzhao"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 신짜오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["P [[STUN]] cannot interrupt Xin Zhao's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    xinzhao: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 애니 R로 [[SUMMON]]된 티버를 [[AIRBORNE]], [[KNOCKBACK]] 할 수 있음."],
      en: ["Xin Zhao's Q [[AIRBORNE]] and R [[KNOCKBACK]] can send Annie's R [[SUMMON]]ed Tibbers airborne or knock it back."],
    },
  },
};
