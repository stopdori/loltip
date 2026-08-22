// app/data/matchups/caitlyn/caitlyn_gwen.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_gwen: MatchupSummary = {
  champs: ["caitlyn", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 그웬 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Gwen's E [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    gwen: {
      ko: ["W(그면상)의 [[UNTARGETABLE]] 효과로 케이틀린 평타, Q, E, R의 [[PROJECTILE]]를 범위 밖에서 맞지 않음. \n 그웬에게 사용한 평타, R의 [[PROJECTILE]]는 날아가던 중 범위 안에 들어가면 사라짐.",
        "W(그면상)의 [[UNTARGETABLE]] 효과로 케이틀린 W([[TRAP]])를 범위 밖에서 밟지 않음. [[CLIP:https://youtube.com/shorts/g_FjmiTqfmY]]"],
      en: ["Gwen's W (Mist) [[UNTARGETABLE]] effect prevents her from being hit by Caitlyn's auto attack, Q, E, and R [[PROJECTILE]]s from outside the zone. \n Auto attack and R [[PROJECTILE]]s aimed at Gwen disappear if they enter the zone while in flight.",
        "Gwen's W (Mist) [[UNTARGETABLE]] effect prevents her from stepping on Caitlyn's W ([[TRAP]]) from outside the zone. [[CLIP:https://youtube.com/shorts/g_FjmiTqfmY]]"],
    },
  },
  common: {
    ko: ["케이틀린 R의 [[SKILL_CHANNEL]]을 그웬에게 시전할 때 \n 그웬이 W(그면상)를 범위 밖에서 사용하면 케이틀린 R의 [[SKILL_CHANNEL]]이 끊김.",
      "케이틀린 R을 그웬에게 사용하여 [[PROJECTILE]]가 발사 됐을 때 \n 그웬이 W를 범위 밖에서 사용하면 날아가던 [[PROJECTILE]]이 범위 안에 들어가면 사라짐. [[CLIP:https://www.youtube.com/shorts/8RsNjX-cvyE]]"],
    en: ["When Caitlyn casts R's [[SKILL_CHANNEL]] on Gwen, \n if Gwen uses W (Mist) from outside the zone, Caitlyn's R [[SKILL_CHANNEL]] is interrupted.",
      "When Caitlyn uses R on Gwen and the [[PROJECTILE]] has already been fired, \n if Gwen uses W from outside the zone, the flying [[PROJECTILE]] disappears once it enters the zone. [[CLIP:https://www.youtube.com/shorts/8RsNjX-cvyE]]"],
  },
};
