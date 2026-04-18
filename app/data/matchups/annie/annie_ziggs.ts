// app/data/matchups/annie/annie_ziggs.ts
import type { MatchupSummary } from "../_types";

export const annie_ziggs: MatchupSummary = {
  champs: ["annie", "ziggs"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 직스 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니 R(티버)의 [[SUMMON]]으로 직스 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, Q의 추가 [[AOE]]피해는 막을 수 없음.", 
        "애니 R(티버)의 [[SUMMON]]으로 직스 E의 [[TRAP]]을 제거할 수 있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Ziggs's W [[DASH]]. \n However, the [[STUN]] still applies.", "Annie's R(Tibbers) [[SUMMON]] can block Ziggs's Q [[SINGLE]] [[PROJECTILE]]. \n However, Q's additional [[AOE]] damage cannot be blocked.", "Annie's R(Tibbers) [[SUMMON]] can destroy Ziggs's E [[TRAP]]."],
    },
    ziggs: {
      ko: [],
      en: [],
    },
  },
};
