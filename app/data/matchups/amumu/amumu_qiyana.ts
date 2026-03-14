// app/data/matchups/amumu/amumu_qiyana.ts
import type { MatchupSummary } from "../_types";

export const amumu_qiyana: MatchupSummary = {
  champs: ["amumu", "qiyana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 키아나 W, E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 키아나 W, E를 끊을 수 있음."," 아무무 Q로 키아나 물Q의 [[ROOT]], R의 [[KNOCKBACK]] [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 W의 [[ROOT]], R의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Qiyana's W or E, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Qiyana's W and E.", "Amumu's Q is affected by Qiyana's Water Q [[ROOT]] and R [[KNOCKBACK]] [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and W's [[ROOT]] and R's [[STUN]] remain active."],
    },
    qiyana: {
      ko: [],
      en: [],
    },
  },
};
