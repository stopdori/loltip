// app/data/matchups/briar/briar_hecarim.ts
import type { MatchupSummary } from "../_types";

export const briar_hecarim: MatchupSummary = {
  champs: ["briar", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 헤카림 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 헤카림 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]를 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 헤카림 E의 [[DASH]], R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 헤카림과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Hecarim's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Hecarim's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Hecarim's E [[KNOCKBACK]] or R [[FEAR]].",
        "R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Hecarim's E [[KNOCKBACK]] and R [[FEAR]].",
        "R2 [[HOMING]] [[DASH]] can follow Hecarim's E [[DASH]] and R [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Hecarim."],
    },
    hecarim: {
      ko: [],
      en: [],
    },
  },
};
