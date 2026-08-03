// app/data/matchups/aatrox/aatrox_briar.ts
import type { MatchupSummary } from "../_types";

export const aatrox_briar: MatchupSummary = {
  champs: ["aatrox", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]]으로 브라이어 Q, W의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] can interrupt Briar's Q and W [[DASH]]."],
    },
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "브라이어 E의 [[KNOCKBACK]], R2의 [[FEAR]]로 아트록스 E의 [[DASH]]을 끊을 수 있음.",
        "브라이어 E의 [[CAST_COMMIT]]으로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]에 걸려도 시전을 유지할 수 있음.",
        "브라이어 R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 무시할 수 있음.",
        "브라이어 R2의 [[HOMING]] [[DASH]]으로 아트록스 E의 [[DASH]]을 따라갈 수 있음."],
      en: ["Briar's Q [[STUN]] cannot interrupt Aatrox's E [[DASH]].",
        "Briar's E [[KNOCKBACK]] and R2 [[FEAR]] can interrupt Aatrox's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Aatrox's Q [[AIRBORNE]] or W [[GRAB]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Aatrox's Q [[AIRBORNE]] and W [[GRAB]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Aatrox's E [[DASH]]."],
    },
  },
};
