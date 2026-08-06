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
      ko: ["브라이어 Q의 [[STUN]]로 아무무 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "브라이어 E의 [[KNOCKBACK]], R2의 [[FEAR]]로 아무무 Q의 돌진단계 [[DASH]]을 끊을 수 있음.",
        "브라이어 E의 [[CAST_COMMIT]]으로 아무무 Q, R의 [[STUN]]에 걸려도 시전을 유지할 수 있음.",
        "브라이어 R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 아무무 Q, R의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음.",
        "브라이어 R2의 [[HOMING]] [[DASH]]으로 아무무 Q의 [[DASH]]을 따라갈 수 있음."],
      en: ["Briar's Q [[STUN]] cannot interrupt Amumu's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R2 [[FEAR]] can interrupt Amumu's Q [[DASH]] (dash phase).",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Amumu's Q or R [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Amumu's Q and R [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends.",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Amumu's Q [[DASH]]."],
    },
  },
};
