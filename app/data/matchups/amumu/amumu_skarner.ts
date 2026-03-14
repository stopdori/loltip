// app/data/matchups/amumu/amumu_skarner.ts
import type { MatchupSummary } from "../_types";

export const amumu_skarner: MatchupSummary = {
  champs: ["amumu", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 스카너 E(벽이동)을 끊을 수 있음.", "아무무 Q로 스카너 E의 [[SUPPRESS]], [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]은 남아있음.", "아무무 Q(투척, 돌진단계)로 스카너 R의 [[SUPPRESS]]를 탈출 할 수 없음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Skarner's E (wall traversal).", "Amumu's Q is affected by Skarner's E [[SUPPRESS]] and [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active.", "Amumu cannot escape Skarner's R [[SUPPRESS]] with Q (neither throw nor dash phase)."],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
