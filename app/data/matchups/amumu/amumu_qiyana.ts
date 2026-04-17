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
      ko: ["아무무 Q의 [[STUN]]로 키아나 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 키아나 W, E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 키아나 W, E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 키아나 물Q의 [[ROOT]], R의 [[KNOCKBACK]] [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]], [[STUN]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Qiyana's W and E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Qiyana's W and E [[DASH]].", "Amumu's R [[STUN]] can interrupt Qiyana's W and E [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Qiyana's Water Q [[ROOT]] and R [[KNOCKBACK]] [[STUN]] and continue [[DASH]]. \n However, the [[ROOT]] and [[STUN]] still apply."],
    },
    qiyana: {
      ko: [],
      en: [],
    },
  },
};
