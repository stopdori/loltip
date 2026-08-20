// app/data/matchups/briar/briar_kled.ts
import type { MatchupSummary } from "../_types";

export const briar_kled: MatchupSummary = {
  champs: ["briar", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 클레드 승마폼 Q의 [[GRAB]] / R의 [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 클레드 승마폼 Q의 [[GRAB]] / R의 [[KNOCKBACK]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 클레드 승마폼 E, 낙마폼 Q의 [[DASH]] / 승마폼 R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 클레드와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Kled's Mounted Form E or Dismounted Form Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Kled's Mounted Form E or Dismounted Form Q [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Kled's Mounted Form Q [[GRAB]] or R [[KNOCKBACK]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Kled's Mounted Form Q [[GRAB]] and R [[KNOCKBACK]].",
        "R2 [[HOMING]] [[DASH]] can follow Kled's Mounted Form E, Dismounted Form Q [[DASH]], and Mounted Form R [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Kled."],
    },
    kled: {
      ko: [],
      en: [],
    },
  },
};
