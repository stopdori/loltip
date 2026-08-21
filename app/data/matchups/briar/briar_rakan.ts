// app/data/matchups/briar/briar_rakan.ts
import type { MatchupSummary } from "../_types";

export const briar_rakan: MatchupSummary = {
  champs: ["briar", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 라칸 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 라칸 W, E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 라칸 W의 [[AIRBORNE]], R의 [[CHARM]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 라칸 W의 [[AIRBORNE]], R의 [[CHARM]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 라칸 W, E의 [[DASH]]을 따라갈 수 있음. \n 단, 라칸과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Rakan's W and E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Rakan's W and E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Rakan's W [[AIRBORNE]] and R [[CHARM]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Rakan's W [[AIRBORNE]] and R [[CHARM]].",
        "R2 [[HOMING]] [[DASH]] can follow Rakan's W and E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Rakan."],
    },
    rakan: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["특이한 판정 \n 브라이어 R1의 [[PROJECTILE]]를 라칸에게 적중했을 때 \n 라칸이 R을 사용한 상태라면 \n 브라이어 R2의 [[HOMING]] [[DASH]]으로 라칸과 충돌 할 때 \n 라칸은 데미지를 받고, 브라이어는 라칸 R의 [[CHARM]]이 걸림. [[CLIP:https://www.youtube.com/shorts/5D2tw0vUkpM]]"],
    en: ["Unusual interaction \n If Briar's R1 [[PROJECTILE]] hits Rakan \n while Rakan has already used his R, \n then when Briar's R2 [[HOMING]] [[DASH]] collides with Rakan, \n Rakan takes damage and Briar gets [[CHARM]]ed by Rakan's R. [[CLIP:https://www.youtube.com/shorts/5D2tw0vUkpM]]"],
  },
};
