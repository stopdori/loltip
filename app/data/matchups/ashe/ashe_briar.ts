// app/data/matchups/ashe/ashe_briar.ts
import type { MatchupSummary } from "../_types";

export const ashe_briar: MatchupSummary = {
  champs: ["ashe", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["애쉬 R의 [[STUN]]로 브라이어 Q, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Ashe's R [[STUN]] cannot interrupt Briar's Q or W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    briar: {
      ko: ["브라이어 E의 [[CAST_COMMIT]]으로 애쉬 R의 [[STUN]]에 걸려도 시전을 유지할 수 있음.",
        "브라이어 R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 애쉬 R의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음.",
        "브라이어 R2의 [[HOMING]] [[DASH]]으로 애쉬 E의 [[DASH]]을 따라갈 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Ashe's R [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Ashe's R [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends.",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Ashe's E [[DASH]]."],
    },
  },
};
