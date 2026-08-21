// app/data/matchups/briar/briar_poppy.ts
import type { MatchupSummary } from "../_types";

export const briar_poppy: MatchupSummary = {
  champs: ["briar", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 뽀삐 R의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "Q의 [[STUN]]로 뽀삐 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 뽀삐 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 뽀삐 E의 [[KNOCKBACK]], [[STUN]] / R의 [[AIRBORNE]], [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 뽀삐 E의 [[KNOCKBACK]], [[STUN]] / R의 [[AIRBORNE]], [[KNOCKBACK]]을 무시할 수 있음. [[CLIP:https://www.youtube.com/shorts/WwtOFPlLqj4]]"],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Poppy's R [[SKILL_CHARGED]].",
        "Q [[STUN]] cannot interrupt Poppy's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Poppy's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Poppy's E [[KNOCKBACK]], [[STUN]] / R's [[AIRBORNE]], [[KNOCKBACK]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Poppy's E [[KNOCKBACK]], [[STUN]] / R's [[AIRBORNE]], [[KNOCKBACK]]. [[CLIP:https://www.youtube.com/shorts/WwtOFPlLqj4]]"],
    },
    poppy: {
      ko: ["특이한 판정 \n 뽀삐 R의 [[KNOCKBACK]]으로 브라이어가 날아가는 도중에 R1의 [[PROJECTILE]]가 적중하는 순간 \n 브라이어가 그 자리에 멈추고 R2를 시전. \n 대상에게 [[UNSTOPPABLE]] [[DASH]]. [[CLIP:https://www.youtube.com/shorts/3EalTNnzz8I]]"],
      en: ["Unusual interaction \n The moment Briar's R1 [[PROJECTILE]] lands while she is being knocked back by Poppy's R [[KNOCKBACK]], \n Briar stops in place and casts R2, \n [[UNSTOPPABLE]] [[DASH]]ing toward the target. [[CLIP:https://www.youtube.com/shorts/3EalTNnzz8I]]"],
    },
  },
};
