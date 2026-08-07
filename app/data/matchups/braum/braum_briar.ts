// app/data/matchups/braum/braum_briar.ts
import type { MatchupSummary } from "../_types";

export const braum_briar: MatchupSummary = {
  champs: ["braum", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 브라이어 평타, Q, W(평타), E, R1, R2를 막을([[DAMAGE_NULLIFY]]) 수 있음."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Briar's basic attacks, Q, W (basic attacks), E, R1 and R2"],
    },
    briar: {
      ko: ["Q의 [[STUN]]로 브라움 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R2의 [[FEAR]]로 브라움 W의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 브라움 P의 [[STUN]], R의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 브라움 P의 [[STUN]], R의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 브라움 W의 [[DASH]]을 따라갈 수 있음. \n 단, 브라움과 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]] cannot interrupt Braum's W [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R2 [[FEAR]] can interrupt Braum's W [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Braum's P [[STUN]] or R [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Braum's P [[STUN]] and R [[AIRBORNE]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Braum's W [[DASH]]. \n However, [[HOMING]] ends upon colliding with Braum."],
    },
  },
};
