// app/data/matchups/aatrox/aatrox_irelia.ts
import type { MatchupSummary } from "../_types";

export const aatrox_irelia: MatchupSummary = {
  champs: ["aatrox", "irelia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q의 [[AIRBORNE]], W [[GRAB]]효과로 이렐리아 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Aatrox's Q [[AIRBORNE]] and W [[GRAB]] effect can interrupt Irelia's Q [[DASH]]."],
    },
    irelia: {
      ko: ["이렐리아 R의 [[CAST_COMMIT]]으로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]에 걸려도 시전을 유지할 수 있음."],
      en: ["Irelia's R [[CAST_COMMIT]] can maintain its cast even when hit by Aatrox's Q [[AIRBORNE]] and W [[GRAB]]."],
    },
  },
};
