// app/data/matchups/briar/briar_galio.ts
import type { MatchupSummary } from "../_types";

export const briar_galio: MatchupSummary = {
  champs: ["briar", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 갈리오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "E의 [[KNOCKBACK]], R2의 [[FEAR]]로 갈리오 E의 돌진단계 [[DASH]]을 끊을 수 있음. \n 단, 갈리오 E의 준비단계에 적중하면 [[CC_BUFFER]]로 인해 돌진단계의 [[DASH]] 시전.",
        "E의 [[CAST_COMMIT]]으로 갈리오 W의 [[TAUNT]] / E, R의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 갈리오 W의 [[TAUNT]] / E, R의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 갈리오 E의 [[DASH]], R의 [[BLINK]]을 따라갈 수 있음. \n 단, 갈리오와 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]] cannot interrupt Galio's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R2 [[FEAR]] can interrupt Galio's E [[DASH]] (dash phase). \n However, if it hits during Galio's E windup phase, [[CC_BUFFER]] still triggers the dash phase [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Galio's W [[TAUNT]] or E and R [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Galio's W [[TAUNT]] and E and R [[AIRBORNE]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Galio's E [[DASH]] and R [[BLINK]]. \n However, [[HOMING]] ends upon colliding with Galio."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
