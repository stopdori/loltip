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
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]]으로 릴리아 W의 [[DASH]]을 끊을 수 있음. \n 단, W의 공격도 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[GRAB]] can interrupt Lillia's W [[DASH]]. \n However, W's damage instance can also be interrupted."],
    },
    lillia: {
      ko: ["릴리아 R의 [[SLEEP]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SLEEP]]은 남아있음."],
      en: ["Lillia's R [[SLEEP]] cannot interrupt Aatrox's E. However, the [[SLEEP]] still applies."],
    },
  },
};
