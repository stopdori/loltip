// app/data/matchups/amumu/amumu_briar.ts
import type { MatchupSummary } from "../_types";

export const amumu_briar: MatchupSummary = {
  champs: ["amumu", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 브라이어 Q, W의 [[DASH]]을 끊을 수 있음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 브라이어 Q, W의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 브라이어 Q, W의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 브라이어 Q의 [[STUN]] / E의 [[KNOCKBACK]] [[STUN]] / R의 [[FEAR]]를 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]], [[FEAR]]는 남아있음."],
      en: ["Amumu's Q [[STUN]] can interrupt Briar's Q and W [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Briar's Q and W [[DASH]].", "Amumu's R [[STUN]] can interrupt Briar's Q and W [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Briar's Q [[STUN]] / E [[KNOCKBACK]] [[STUN]] / R [[FEAR]] and continue [[DASH]]. \n However, the [[STUN]] and [[FEAR]] still apply."],
    },
    briar: {
      ko: [],
      en: [],
    },
  },
};
