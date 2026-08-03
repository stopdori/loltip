// app/data/matchups/ambessa/ambessa_briar.ts
import type { MatchupSummary } from "../_types";

export const ambessa_briar: MatchupSummary = {
  champs: ["ambessa", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 브라이어 Q, W의 [[DASH]]를 끊을 수 있음.", "암베사 R의 [[UNSTOPPABLE]]로 브라이어 Q의 [[STUN]], R의 [[FEAR]]를 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]], [[FEAR]]는 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Briar's Q and W [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Briar's Q [[STUN]] and R [[FEAR]]. \n However, the [[STUN]] and [[FEAR]] still apply after [[UNSTOPPABLE]] ends."],
    },
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 암베사 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "브라이어 E의 [[KNOCKBACK]], R2의 [[FEAR]]로 암베사 P의 [[DASH]]을 끊을 수 있음.",
        "브라이어 E의 [[CAST_COMMIT]]으로 암베사 R의 [[SUPPRESS]], [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "브라이어 R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 암베사 R의 [[SUPPRESS]]을 무시할 수 있음.",
        "브라이어 R2의 [[HOMING]] [[DASH]]으로 암베사 R의 [[DASH]]을 따라갈 수 있음."],
      en: ["Briar's Q [[STUN]] cannot interrupt Ambessa's P [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R2 [[FEAR]] can interrupt Ambessa's P [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Ambessa's R [[SUPPRESS]] or [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Ambessa's R [[SUPPRESS]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Ambessa's R [[DASH]]."],
    },
  },
  common: {
    ko: ["암베사 R의 [[SUPPRESS]]을 브라이어 R1의 [[CC_IMMUNE]]에 사용하면 \n 암베사가 브라이어에게 [[BLINK]] 하지만, 브라이어는 [[SUPPRESS]]과 데미지를 완전히 무시하고 행동을 이어서 진행. [[VIDEO:https://www.youtube.com/shorts/8jc0IeTeLos]]",
      "암베사 R의 [[SUPPRESS]]을 브라이어 R2의 [[UNSTOPPABLE]] [[DASH]]에 사용하면 \n 암베사 R이 브라이어에게 적중한 지점에 [[BLINK]] 하지만, 브라이어는 [[SUPPRESS]]과 데미지를 완전히 무시하고 [[DASH]]. [[VIDEO:https://www.youtube.com/shorts/V-fGfjtDu5E]]",],
    en: ["If Ambessa's R [[SUPPRESS]] is used on Briar's R1 [[CC_IMMUNE]], \n Ambessa [[BLINK]]s to Briar, but Briar completely ignores the [[SUPPRESS]] and damage and continues her action. [[VIDEO:https://www.youtube.com/shorts/8jc0IeTeLos]]",
      "If Ambessa's R [[SUPPRESS]] is used on Briar's R2 [[UNSTOPPABLE]] [[DASH]], \n Ambessa's R [[BLINK]]s to the point where it hit Briar, but Briar completely ignores the [[SUPPRESS]] and damage and continues the [[DASH]]. [[VIDEO:https://www.youtube.com/shorts/V-fGfjtDu5E]]"],
  },
};
