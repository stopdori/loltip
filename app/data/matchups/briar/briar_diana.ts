// app/data/matchups/briar/briar_diana.ts
import type { MatchupSummary } from "../_types";

export const briar_diana: MatchupSummary = {
  champs: ["briar", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: [
        "Q의 [[STUN]]로 다이애나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 다이애나 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 다이애나 R의 [[GRAB]]에 걸려도 시전을 유지할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 다이애나 Q의 [[AIRBORNE]], W의 [[GRAB]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 다이애나 E의 [[DASH]]을 따라갈 수 있음. \n 단, 다이애나와 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]] cannot interrupt Diana's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R [[FEAR]] can interrupt Diana's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Diana's R [[GRAB]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Diana's Q [[AIRBORNE]] and W [[GRAB]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Diana's E [[DASH]]. \n However, [[HOMING]] ends upon colliding with Diana."],
    },
    diana: {
      ko: [],
      en: [],
    },
  },
};
