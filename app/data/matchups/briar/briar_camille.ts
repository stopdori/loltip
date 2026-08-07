// app/data/matchups/briar/briar_camille.ts
import type { MatchupSummary } from "../_types";

export const briar_camille: MatchupSummary = {
  champs: ["briar", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 카밀 E의 3.대기 단계를 끊을 수 있음. \n 게다가, 카밀 E의 1.투척 / 2.그렙 단계에 걸린 [[STUN]]이 3.대기 단계까지도 남아있는 경우 E가 해제될 수 있음.", 
        "Q의 [[STUN]]로 카밀 E의 1.투척 / 2.그렙 / 3.대기 / 4.돌진 단계 중에서 \n 2.그렙 / 4.돌진 단계의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 카밀 E의 2.그렙 / 4.돌진 단계의 [[DASH]] / 3.대기 단계를 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 카밀 E의 [[AIRBORNE]], R의 [[SILENCE]], [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 카밀 E의 [[AIRBORNE]] / R의 [[SILENCE]], [[KNOCKBACK]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 카밀 E의 [[DASH]], R의 [[UNTARGETABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 카밀과 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]] can interrupt Camille's E during the 3. waiting phase. \n Moreover, if the [[STUN]] applied during Camille's E 1. throw / 2. grapple phase still lingers into the 3. waiting phase, her E can be canceled.",
        "Among Camille's E phases (1. throw / 2. grapple / 3. waiting / 4. dash), Briar's Q [[STUN]] cannot interrupt the [[DASH]] during the 2. grapple / 4. dash phase. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R [[FEAR]] can interrupt the [[DASH]] during Camille's E 2. grapple / 4. dash phase, and the 3. waiting phase.",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Camille's E [[AIRBORNE]] or R [[SILENCE]], [[KNOCKBACK]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Camille's E [[AIRBORNE]] and R [[SILENCE]], [[KNOCKBACK]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Camille's E [[DASH]] and R [[UNTARGETABLE]] [[DASH]]. \n However, [[HOMING]] ends upon colliding with Camille."],
    },
    camille: {
      ko: [],
      en: [],
    },
  },
};
