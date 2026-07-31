// app/data/matchups/ambessa/ambessa_briar.ts
import type { MatchupSummary } from "../_types";

export const ambessa_briar: MatchupSummary = {
  champs: ["ambessa", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 브라이어 Q, W의 [[DASH]]를 끊을 수 있음.", "암베사 R의 [[UNSTOPPABLE]]로 브라이어 Q의 [[STUN]], R의 [[FEAR]]를 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]], [[FEAR]]는 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Briar's Q and W [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Briar's Q [[STUN]] and R [[FEAR]]. \n However, the [[STUN]] and [[FEAR]] still apply after [[UNSTOPPABLE]] ends."],
    },
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 암베사 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "브라이어 E의 [[KNOCKBACK]], R2의 [[FEAR]]로 암베사 P의 [[DASH]]을 끊을 수 있음.",
        "브라이어 E의 [[CAST_COMMIT]]으로 암베사 R의 [[SUPPRESS]], [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "브라이어 R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 암베사 R의 [[SUPPRESS]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음.",
        "브라이어 R2의 [[HOMING]] [[DASH]]으로 암베사 R의 [[DASH]]을 따라갈 수 있음."],
      en: ["Briar's Q [[STUN]] cannot interrupt Ambessa's P [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R2 [[FEAR]] can interrupt Ambessa's P [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Ambessa's R [[SUPPRESS]] or [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Ambessa's R [[SUPPRESS]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends.",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Ambessa's R [[DASH]]."],
    },
  },
};
