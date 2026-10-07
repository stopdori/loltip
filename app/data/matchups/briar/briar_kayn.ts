// app/data/matchups/briar/briar_kayn.ts
import type { MatchupSummary } from "../_types";

export const briar_kayn: MatchupSummary = {
  champs: ["briar", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]], R2의 [[FEAR]]로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "Q의 [[STUN]] / E의 [[KNOCKBACK]] / R2의 [[FEAR]]로 (케인 / 그암 / 다르킨) E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "E의 [[KNOCKBACK]]으로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "E의 [[SKILL_CHARGED]]은 [[CAST_COMMIT]]으로 다르킨 W의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음. [[EXIST]]", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 다르킨 W의 [[AIRBORNE]]을 무시할 수 있음. [[EXIST]]", 
        "R2의 [[HOMING]] [[DASH]]으로 (케인 / 그암 / 다르킨) Q의 [[DASH]] / E의 [[IGNORE_TERRAIN]] / R2의 [[UNTARGETABLE]] [[DASH]]을 따라갈 수 있음. [[EXIST]] \n 단, 대상과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] and R2 [[FEAR]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[NOT_EXIST]] \n However, the [[STUN]] still applies.", 
        "Q [[STUN]] / E [[KNOCKBACK]] / R2 [[FEAR]] can interrupt (Kayn / Shadow Assassin / Darkin) E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "E [[KNOCKBACK]] can interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[EXIST]]", 
        "E [[SKILL_CHARGED]] can keep casting thanks to [[CAST_COMMIT]] even when hit by Darkin W [[AIRBORNE]]. [[EXIST]]", 
        "R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Darkin W [[AIRBORNE]]. [[EXIST]]", 
        "R2 [[HOMING]] [[DASH]] can follow (Kayn / Shadow Assassin / Darkin) Q [[DASH]] / E [[IGNORE_TERRAIN]] / R2 [[UNTARGETABLE]] [[DASH]]. [[EXIST]] \n However, the [[HOMING]] ends upon colliding with the target."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
