// app/data/matchups/annie/annie_briar.ts
import type { MatchupSummary } from "../_types";

export const annie_briar: MatchupSummary = {
  champs: ["annie", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 브라이어 Q, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Briar's Q and W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    briar: {
      ko: ["브라이어 E의 [[CAST_COMMIT]]으로 애니 P의 [[STUN]]에 걸려도 시전을 유지할 수 있음.",
        "브라이어 R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 애니 P의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Annie's P [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Annie's P [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
  },
};
