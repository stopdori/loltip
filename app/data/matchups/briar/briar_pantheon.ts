// app/data/matchups/briar/briar_pantheon.ts
import type { MatchupSummary } from "../_types";

export const briar_pantheon: MatchupSummary = {
  champs: ["briar", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]], [[FEAR]]로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[STUN]]로 판테온 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 판테온 W의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 판테온 W의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 판테온 W의 [[STUN]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 판테온 R의 [[UNTARGETABLE]] [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 판테온과 충돌하면 [[HOMING]] 종료. \n 단, 판테온이 R로 사라졌을 때 브라이어가 날아온다면, 판테온이 사라진 자리에 도착하고 [[HOMING]] 종료. \n 사라진 대상은 피해를 입지 않음. [[CLIP:https://www.youtube.com/shorts/7XQvCNkaqbM]]"],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]], [[FEAR]] can interrupt Pantheon's R [[SKILL_CHANNEL]].",
        "Q [[STUN]] cannot interrupt Pantheon's W [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Pantheon's W [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Pantheon's W [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Pantheon's W [[STUN]].",
        "R2 [[HOMING]] [[DASH]] can follow Pantheon's R [[UNTARGETABLE]] [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Pantheon. \n However, if Briar is already in flight when Pantheon vanishes with R, she arrives at the spot where Pantheon disappeared and the [[HOMING]] ends. \n The vanished target takes no damage. [[CLIP:https://www.youtube.com/shorts/7XQvCNkaqbM]]"],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["특이한 판정 \n 판테온 R의 [[SKILL_CHANNEL]] 도중에 브라이어 R의 [[DISRUPT]] [[PROJECTILE]]를 맞으면 \n 판테온 R의 [[SKILL_CHANNEL]]이 끊김. [[CLIP:https://www.youtube.com/shorts/kzzr8DbRFUQ]]"],
    en: ["Unusual interaction - advanced \n If Pantheon is hit by Briar's R [[PROJECTILE]] while channeling his R [[SKILL_CHANNEL]], \n Pantheon's R [[SKILL_CHANNEL]] gets interrupted. \n This happens even though there is supposedly no way to interrupt it. [[CLIP:https://www.youtube.com/shorts/kzzr8DbRFUQ]]"],
  },
};
