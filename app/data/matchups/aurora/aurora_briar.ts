// app/data/matchups/aurora/aurora_briar.ts
import type { MatchupSummary } from "../_types";

export const aurora_briar: MatchupSummary = {
  champs: ["aurora", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["오로라 W의 [[INVISIBILITY]]으로 브라이어 W([[BERSERK]])을 따돌릴 수 있음.",
        "오로라 E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]으로 브라이어 Q의 [[STUN]] / E의 [[KNOCKBACK]], [[STUN]] / R의 [[FEAR]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]], [[FEAR]]는 남아있음. \n 단, E의 [[KNOCKBACK]]은 밀려나다가 [[DASH]] 발동.",
        "오로라 R의 [[UNSTOPPABLE]] [[DASH]]으로 브라이어 Q의 [[STUN]] / E의 [[KNOCKBACK]], [[STUN]] / R의 [[FEAR]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]], [[FEAR]]는 남아있음."],
      en: ["Aurora's W [[INVISIBILITY]] can evade Briar's W ([[BERSERK]]).",
        "Aurora's E (ready phase) [[CC_BUFFER]] and R [[UNSTOPPABLE]] [[DASH]] can ignore Briar's Q [[STUN]] / E [[KNOCKBACK]], [[STUN]] / R [[FEAR]] and continue [[DASH]]ing. \n However, the [[STUN]] and [[FEAR]] still apply. \n However, for E's [[KNOCKBACK]], the [[DASH]] activates while being knocked back.",
        "Aurora's R [[UNSTOPPABLE]] [[DASH]] can ignore Briar's Q [[STUN]] / E [[KNOCKBACK]], [[STUN]] / R [[FEAR]] and continue [[DASH]]ing. \n However, the [[STUN]] and [[FEAR]] still apply."],
    },
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 오로라 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "브라이어 E의 [[KNOCKBACK]], R2의 [[FEAR]]로 오로라 W, E의 [[DASH]]을 끊을 수 있음.",
        "브라이어 R2의 [[HOMING]] [[DASH]]으로 오로라 W, E의 [[DASH]] / R의 [[UNTARGETABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 오로라와 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]] cannot interrupt Aurora's W and E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R2 [[FEAR]] can interrupt Aurora's W and E [[DASH]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Aurora's W, E [[DASH]] / R [[UNTARGETABLE]] [[DASH]]. \n However, [[HOMING]] ends upon colliding with Aurora."],
    },
  },

  common: {
    ko: ["오로라 R (세계의 경계) 영역에서 오로라가 브라이어 E의 [[KNOCKBACK]], R의 [[FEAR]]로 경계 밖으로 밀려나면 \n 영역 반대편으로 이동."],
    en: ["Within the zone of Aurora's R (Between Worlds), if Aurora is knocked outside the boundary by Briar's E [[KNOCKBACK]] or R [[FEAR]], \n she moves to the opposite side of the zone."],
  },
};
