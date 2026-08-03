// app/data/matchups/akali/akali_briar.ts
import type { MatchupSummary } from "../_types";

export const akali_briar: MatchupSummary = {
  champs: ["akali", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 브라이어 Q, W, R2의 [[DASH]]을 따라 갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Briar's Q, W, and R2 [[DASH]]."],
    },
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "브라이어 E의 [[KNOCKBACK]], R의 [[FEAR]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음. \n 단, 아칼리의 E2, R1, R2는 대상과 충돌하지 않으면 데미지가 무시될 수 있음.", 
        "브라이어 R의 [[TRUE_SIGHT]]로 아칼리 W의 [[INVISIBILITY]]을 볼 수 있음.",
        "브라이어 R2의 [[HOMING]] [[DASH]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 따라갈 수 있음."],
      en: ["Briar's Q [[STUN]] cannot interrupt Akali's E1, E2, R1, and R2 [[DASH]]. \n However, the [[STUN]] still applies.", 
        "Briar's E [[KNOCKBACK]] and R [[FEAR]] can interrupt Akali's E1, E2, R1, and R2 [[DASH]]. \n However, Akali's E2, R1, and R2 damage will not apply if she does not collide with the target.", 
        "Briar's R [[TRUE_SIGHT]] can reveal Akali's W [[INVISIBILITY]].", 
      "Briar's R2 [[HOMING]] [[DASH]] can follow Akali's E1, E2, R1, R2 [[DASH]]."],
    },
  },
};
