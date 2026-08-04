// app/data/matchups/alistar/alistar_poppy.ts
import type { MatchupSummary } from "../_types";

export const alistar_poppy: MatchupSummary = {
  champs: ["alistar", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 뽀삐 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 뽀삐 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 뽀삐 W의 [[STUN]] [[AIRBORNE]] [[GROUNDED]], E의 [[STUN]], R의 [[AIRBORNE]]을 해제할 수 있음. \n 단, [[SKILL_CHARGED]]한 뽀삐 R에 날아가면 해제하고 스킬을 사용해도 유효하지 않고 끝까지 날아감.", 
        "R의 [[CC_CLEANSE]]로 뽀삐 Q의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Poppy's E [[DASH]].", "E [[STUN]] cannot interrupt Poppy's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Poppy's W [[STUN]][[AIRBORNE]][[GROUNDED]], E [[STUN]], and R [[AIRBORNE]]. \n However, if Poppy's R [[SKILL_CHARGED]] was fully charged, Alistar will continue to be knocked away even after cleansing.", "Poppy's Q persistent [[SLOW]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]]."],
    },
    poppy: {
      ko: ["뽀삐 W의 [[ANTI_DASH]]로 알리스타 W의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음.", "뽀삐 E와 알리스타 W가 부딪히면 알리스타 W가 무효화\n뽀삐 E를 알리스타에게 사용했을 때 알리스타 Q를 타이밍맞춰 사용하면, 뽀삐 E는 유효하고 알리스타 Q도 유효함\n단, 뽀삐에게 [[AIRBORNE]] 모션이 없지만 CC게이지에 공중에뜸 으로 유효."],
      en: ["Poppy's W can [[ANTI_DASH]] Alistar's W", "When Poppy's E and Alistar's W collide, Alistar's W is nullified \n When Poppy uses E on Alistar, if Alistar uses Q at the right timing, both Poppy's E and Alistar's Q are valid \n However, Poppy has no [[AIRBORNE]] animation, but it counts as airborne in the CC gauge"],
    },
  },
};
