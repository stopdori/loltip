// app/data/matchups/aatrox/aatrox_kled.ts
import type { MatchupSummary } from "../_types";

export const aatrox_kled: MatchupSummary = {
  champs: ["aatrox", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 클레드 E의 [[DASH]]을 끊을 수 있음.", 
        "W를 클레드 승마폼에 맞히고 낙마 시키면, W의 [[TETHER]] 효과가 유지됨"],
      en: ["Q [[AIRBORNE]] and W [[GRAB]] can interrupt Kled's E [[DASH]].", "If mounted Kled is hit by W and dismounts, the W [[TETHER]] effect remains active."],
    },
    kled: {
      ko: ["클레드 Q의 [[GRAB]], R의 [[KNOCKBACK]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Kled's Q [[GRAB]] and R [[KNOCKBACK]] can interrupt Aatrox's E [[DASH]]."],
    },
  },
};
