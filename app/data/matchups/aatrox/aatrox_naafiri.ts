// app/data/matchups/aatrox/aatrox_naafiri.ts
import type { MatchupSummary } from "../_types";

export const aatrox_naafiri: MatchupSummary = {
  champs: ["aatrox", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 나피리 E, R의 [[DASH]]을 끊을 수 있음.", 
        "W를 맞고 나피리가 W를 사용하면 W의 [[TETHER]]효과가 남아있고, \n 벗어나지 않으면 [[GRAB]] 뿐만아니라 데미지도 들어감."],
      en: ["Q [[AIRBORNE]] and W [[GRAB]] can interrupt Naafiri's E and R [[DASH]].", "If Naafiri uses her own W after being hit by W, the [[TETHER]] remains; if she doesn't escape, she takes full damage including the [[GRAB]]."],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
