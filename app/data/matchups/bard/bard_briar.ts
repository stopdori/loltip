// app/data/matchups/bard/bard_briar.ts
import type { MatchupSummary } from "../_types";

export const bard_briar: MatchupSummary = {
  champs: ["bard", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 브라이어 Q, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 브라이어 Q, W의 [[DASH]]을 끊을 수 있음."],
      en: ["Bard's Q [[STUN]] cannot interrupt Briar's Q and W [[DASH]]. \n However, the [[STUN]] still applies.",
        "Bard's R (Zhonya) can interrupt Briar's Q and W [[DASH]]."],
    },
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 바드 E의 벽이동 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "브라이어 E의 [[KNOCKBACK]], R2의 [[FEAR]]로 바드 E의 벽이동 [[DASH]]을 끊을 수 있음.",
        "브라이어 E의 [[CAST_COMMIT]]으로 바드 Q의 [[STUN]]에 걸려도 시전을 유지할 수 있음.",
        "브라이어 R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 바드 Q의 [[STUN]]을 무시할 수 있음.",
        "브라이어 R2의 [[HOMING]] [[DASH]]으로 바드 E(벽이동)의 [[DASH]]을 따라갈 수 있음. \n 단, 바드와 충돌하면 가장 가까운 벽 밖으로 나와지고 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]] cannot interrupt Bard's E wall-travel [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R2 [[FEAR]] can interrupt Bard's E wall-travel [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Bard's Q [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Bard's Q [[STUN]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Bard's E wall-travel [[DASH]]. \n However, if it collides with Bard, it exits at the nearest wall and [[HOMING]] ends."],
    },
  },

  common: {
    ko: ["바드 R(존야), 브라이어 R은 여러가지 상황이 있음. \n 1. 브라이어가 R의 [[PROJECTILE]]를 발사 중 일 때 존야에 맞으면, 존야에 걸리지만 [[PROJECTILE]]가 발사됨. 적중하면 정상적으로 발동함. \n 가끔 버그로 브라이어가 엄청 천천히 날아갈 때가 있음. \n 2. 브라이어 R의 [[PROJECTILE]]에 적중하고 날아올 때 존야에 맞으면, 존야를 무시하고 [[DASH]]. \n 3. 브라이어 R의 [[PROJECTILE]]가 적중하고 날아올 때, 맞은 대상이 존야도 맞으면. 정상적으로 대상 주변에 광역 [[FEAR]]를 시전."],
    en: ["Bard's R (Zhonya) and Briar's R have several possible situations. \n 1. If Briar is hit by Zhonya while firing her R [[PROJECTILE]], she gets caught by Zhonya, but the [[PROJECTILE]] still fires. If it hits, it activates normally. \n Occasionally, due to a bug, Briar flies extremely slowly. \n 2. If Briar is hit by Zhonya while flying in after her R [[PROJECTILE]] connects, she ignores Zhonya and continues the [[DASH]]. \n 3. If, while Briar flies in after her R [[PROJECTILE]] connects, the hit target is also hit by Zhonya, the area [[FEAR]] around the target is still cast normally."],
  },
};
