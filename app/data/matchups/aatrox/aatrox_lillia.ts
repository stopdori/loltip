// app/data/matchups/aatrox/aatrox_lillia.ts
import type { MatchupSummary } from "../_types";

export const aatrox_lillia: MatchupSummary = {
  champs: ["aatrox", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 릴리아 W의 [[DASH]] 또는 데미지 판정을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[GRAB]] can interrupt Lillia's W [[DASH]] or damage instance."],
    },
    lillia: {
      ko: ["릴리아 R의 [[SLEEP]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SLEEP]]는 남아있음."],
      en: ["Lillia's R [[SLEEP]] cannot interrupt Aatrox's E. However, the [[SLEEP]] still applies."],
    },
  },
};
