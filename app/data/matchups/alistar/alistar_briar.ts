// app/data/matchups/alistar/alistar_briar.ts
import type { MatchupSummary } from "../_types";

export const alistar_briar: MatchupSummary = {
  champs: ["alistar", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]] 브라이어 Q, W의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]] 브라이어 Q, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 브라이어 Q의 [[STUN]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Briar's Q and W [[DASH]].", "E [[STUN]] cannot interrupt Briar's Q and W [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Briar's Q [[STUN]]."],
    },
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 알리스타 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "브라이어 E의 [[KNOCKBACK]], R2의 [[FEAR]]로 알리스타 W의 [[DASH]]을 끊을 수 있음.",
        "브라이어 E의 [[CAST_COMMIT]]으로 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "브라이어 R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 알리스타 E의 [[STUN]]은 남아있음.",
        "브라이어 R2의 [[HOMING]] [[DASH]]으로 알리스타 W의 [[DASH]]을 따라갈 수 있음."],
      en: ["Briar's Q [[STUN]] cannot interrupt Alistar's W [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R2 [[FEAR]] can interrupt Alistar's W [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], or E [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends.",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Alistar's W [[DASH]]."],
    },
  },
};
