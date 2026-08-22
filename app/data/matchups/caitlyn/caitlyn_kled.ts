// app/data/matchups/caitlyn/caitlyn_kled.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_kled: MatchupSummary = {
  champs: ["caitlyn", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 클레드 낙마폼 Q / 승마폼 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Kled's Dismounted Q / Mounted E [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    kled: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["클레드 승마폼에 케이틀린 R의 [[SKILL_CHANNEL]] 중일 때 \n 클레드가 P의 [[TRANSFORM]] [[UNTARGETABLE]]로 낙마폼이 되면 \n 케이틀린 [[SKILL_CHANNEL]]이 끊김.",
      "클레드 승마폼에 케이틀린 R의 [[PROJECTILE]]가 발사 됐을 때 \n 클레드가 P의 [[TRANSFORM]] [[UNTARGETABLE]]로 낙마폼이 되면 \n 1. [[UNTARGETABLE]]가 풀렸을 때 [[PROJECTILE]]에 적중하면 데미지 유효. \n 2. [[UNTARGETABLE]]가 유지될 때 [[PROJECTILE]]에 적중하면 데미지 무효."
    ],
    en: ["While Caitlyn's R [[SKILL_CHANNEL]] is targeting Mounted Kled, \n if Kled's P [[TRANSFORM]] [[UNTARGETABLE]] turns him Dismounted, \n Caitlyn's [[SKILL_CHANNEL]] is interrupted.",
      "When Caitlyn's R [[PROJECTILE]] has already been fired at Mounted Kled, \n if Kled's P [[TRANSFORM]] [[UNTARGETABLE]] turns him Dismounted, \n 1. If the [[PROJECTILE]] hits after [[UNTARGETABLE]] ends, the damage is valid. \n 2. If the [[PROJECTILE]] hits while [[UNTARGETABLE]] is still active, the damage is nullified."
    ],
  },
};
