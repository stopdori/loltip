// app/data/matchups/akshan/akshan_aurora.ts
import type { MatchupSummary } from "../_types";

export const akshan_aurora: MatchupSummary = {
  champs: ["akshan", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akshan: {
      ko: ["R의 [[TRUE_SIGHT]]로 오로라 W의 [[INVISIBILITY]]을 볼 수 있음."],
      en: ["R [[TRUE_SIGHT]] can reveal Aurora's W [[INVISIBILITY]]."],
    },
    aurora: {
      ko: ["오로라 R의 [[UNTARGETABLE]] [[BLINK]]로 오로라에게 사용하는 아크샨 R의 [[SKILL_CHANNEL]]을 시전 취소시키거나, 날아오는 [[PROJECTILE]]를 무효화할 수 있음. \n [[PROJECTILE]] 무효화 방법은 [[UNTARGETABLE]] 상태일 때 접촉하면 사라짐."],
      en: ["Aurora's R (Between Worlds) can cancel Akshan's R cast or nullify its projectiles.\nHowever, in some cases projectiles may still follow.\nProjectiles are nullified when they make contact while Aurora is [[UNTARGETABLE]]."],
    },
  },
};
