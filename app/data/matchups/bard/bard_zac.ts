// app/data/matchups/bard/bard_zac.ts
import type { MatchupSummary } from "../_types";

export const bard_zac: MatchupSummary = {
  champs: ["bard", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 자크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 Q의 [[STUN]]로 자크 E의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "바드 R(존야)로 자크 E의 [[SKILL_CHARGED]], [[DASH]]을 끊을 수 있음.",
        "자크가 Q를 맞히고 다른 대상에게 [[BA]]를 때릴 때 바드 R(존야)를 맞히면 여러가지 판정이 있음. \n 1. Q 대상과 [[BA]] 대상에게 존야를 맞히면, 두 대상이 박치기 하지 않음. \n 2. 한 대상에게만 존야를 맞히면, 둘중 존야에 걸리지 않은 대상만 박치기. \n 3. 자크가 Q를 맞히고 다른 대상에게 [[BA]]도 때렸을 때 자크만 존야에 걸리면, 두 대상이 박치기."],
      en: ["Bard's Q [[STUN]] cannot interrupt Zac's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Bard's Q [[STUN]] can interrupt Zac's E [[SKILL_CHARGED]].",
        "Bard's R (Zhonya) can interrupt Zac's E [[SKILL_CHARGED]] and [[DASH]].",
        "When Zac hits Q and [[BA]]s another target, various interactions occur when hit by Bard's R (Zhonya). \n 1. If Zhonya hits both the Q target and [[BA]] target, neither gets headbutted. \n 2. If Zhonya hits only one target, only the unaffected target gets headbutted. \n 3. If only Zac is affected by Zhonya after hitting Q and [[BA]], both targets get headbutted."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
