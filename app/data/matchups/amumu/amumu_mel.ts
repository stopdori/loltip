// app/data/matchups/amumu/amumu_mel.ts
import type { MatchupSummary } from "../_types";

export const amumu_mel: MatchupSummary = {
  champs: ["amumu", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 멜 R(시전 집중)을 끊을 수 없음.", "아무무 Q로 멜 E의 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[ROOT]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] cannot interrupt Mel's R (channeling).", "Amumu's Q is affected by Mel's E [[ROOT]], but can still move if the dash phase activates.\nHowever, damage is applied and [[ROOT]] remains active."],
    },
    mel: {
      ko: ["멜 W로 아무무 Q를 반사할 수 있음.\n단, 반사한 Q가 적중하면 대상에게 데미지와 [[STUN]]이 유효하고, 멜이 돌진."],
      en: ["Mel's W can reflect Amumu's Q.\nNote: If the reflected Q hits a target, damage and [[STUN]] are applied to the target, and Mel dashes."],
    },
  },
};
