// app/data/matchups/briar/briar_samira.ts
import type { MatchupSummary } from "../_types";

export const briar_samira: MatchupSummary = {
  champs: ["briar", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 사미라 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 사미라 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 사미라 P의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R2의 [[HOMING]] [[DASH]]으로 사미라 E의 [[DASH]]을 따라갈 수 있음. \n 단, 사미라와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Samira's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Samira's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Samira's P [[AIRBORNE]].",
        "R2 [[HOMING]] [[DASH]] can follow Samira's E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Samira."],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
