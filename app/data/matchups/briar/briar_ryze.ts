// app/data/matchups/briar/briar_ryze.ts
import type { MatchupSummary } from "../_types";

export const briar_ryze: MatchupSummary = {
  champs: ["briar", "ryze"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[FEAR]]로 라이즈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[CAST_COMMIT]]으로 라이즈 EW의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 라이즈 EW의 [[ROOT]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 라이즈 R의 [[BLINK]]을 따라갈 수 있음. \n 단, 대상과 충돌하면 [[HOMING]] 종료. \n 단, 라이즈의 R로 대상이 사라졌을 때 브라이어가 날아온다면, 대상이 사라진 자리에 도착하고 [[HOMING]] 종료. \n 사라진 대상은 피해를 입지 않음."],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[FEAR]] can interrupt Ryze's R [[SKILL_CHANNEL]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Ryze's EW [[ROOT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Ryze's EW [[ROOT]].",
        "R2 [[HOMING]] [[DASH]] can follow Ryze's R [[BLINK]]. \n However, the [[HOMING]] ends upon colliding with the target. \n However, if Briar is already in flight when the target vanishes via Ryze's R, she arrives at the spot where the target disappeared and the [[HOMING]] ends. \n The vanished target takes no damage."],
    },
    ryze: {
      ko: [],
      en: [],
    },
    },
  common: {
    ko: ["특이한 판정 \n 라이즈 R의 [[SKILL_CHANNEL]] 도중에 브라이어 R의 [[DISRUPT]] [[PROJECTILE]]를 맞으면 \n 라이즈 R의 [[SKILL_CHANNEL]]이 끊김. [[CLIP:https://www.youtube.com/shorts/kzzr8DbRFUQ]]"],
    en: ["Unusual interaction \n If Ryze is hit by Briar's R [[DISRUPT]] [[PROJECTILE]] while channeling his R [[SKILL_CHANNEL]], \n Ryze's R [[SKILL_CHANNEL]] gets interrupted. [[CLIP:https://www.youtube.com/shorts/kzzr8DbRFUQ]]"],
  },
};
