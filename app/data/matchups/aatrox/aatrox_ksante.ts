// app/data/matchups/aatrox/aatrox_ksante.ts
import type { MatchupSummary } from "../_types";

export const aatrox_ksante: MatchupSummary = {
  champs: ["aatrox", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W [[GRAB]] 효과로 크산테 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[GRAB]] can interrupt K'Sante's E [[DASH]]."],
    },
    ksante: {
      ko: ["크산테 Q3의 [[AIRBORNE]], 일반폼 W의 [[KNOCKBACK]], R의 [[SUPPRESS]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음.", 
        "크산테 일반폼 / 변신폼 W, R의 [[UNSTOPPABLE]] 효과로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과를 무시할 수 있음."],
      en: ["K'Sante's Q3 [[AIRBORNE]], non-ult W [[KNOCKBACK]], and R [[SUPPRESS]] can interrupt Aatrox's E [[DASH]].", "K'Sante's non-ult / ult-form W and R [[UNSTOPPABLE]] can ignore Aatrox's Q [[AIRBORNE]] and W [[GRAB]]."],
    },
  },
};
