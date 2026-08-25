// app/data/matchups/akali/akali_camille.ts
import type { MatchupSummary } from "../_types";

export const akali_camille: MatchupSummary = {
  champs: ["akali", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 카밀 E의 [[DASH]]을 따라 갈 수 있음.",
        "E2를 카밀 R의 [[UNTARGETABLE]] 상태일 때 사용할 수 없음. \n 단, 전후에는 사용 가능.",
        "E2의 [[HOMING]] [[DASH]]으로 카밀 R의 [[DASH]]을 따라갈 수 있음. \n 단, 카밀 R의 타이밍에 따라서 아칼리 E2의 데미지가 들어가지 않고 [[KNOCKBACK]]될 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Camille's E [[DASH]].", "E2 cannot be used while Camille's R is in [[UNTARGETABLE]] state. \n However, it can be used before and after.", "E2 [[HOMING]] [[DASH]] can follow Camille's R [[DASH]]. \n However, depending on the timing of Camille's R, Akali's E2 damage may not apply and she may be [[KNOCKBACK]]ed."],
    },
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 아칼리 Q, E1, E2, R1, R2를 피할 수 있음.", 
      "R의 [[UNTARGETABLE]]로 아칼리 P의 [[EMPOWERED]] 평타를 피할 수 없음. [[CLIP:https://www.youtube.com/shorts/lg7gvUyaC6Y]]"],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Akali's E1, E2, R1, and R2 [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Akali's Q, E1, E2, R1, and R2.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Akali's P [[EMPOWERED]] auto-attack. [[CLIP:https://www.youtube.com/shorts/lg7gvUyaC6Y]]"],
    },
  },
};
