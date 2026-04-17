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
      ko: ["아무무 Q의 [[CC_BUFFER]]로 멜 E의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Amumu's Q [[CC_BUFFER]] can ignore Mel's E [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    mel: {
      ko: ["멜 W로 아무무 Q를 반사할 수 있음.\n단, 반사한 Q가 적중하면 대상에게 데미지와 [[STUN]]이 유효하고, 멜이 돌진."],
      en: ["Mel's W can reflect Amumu's Q.\nNote: If the reflected Q hits a target, damage and [[STUN]] are applied to the target, and Mel dashes."],
    },
  },
};
