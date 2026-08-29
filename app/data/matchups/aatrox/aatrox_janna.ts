// app/data/matchups/aatrox/aatrox_janna.ts
import type { MatchupSummary } from "../_types";

export const aatrox_janna: MatchupSummary = {
  champs: ["aatrox", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W [[GRAB]] 효과로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[GRAB]] effect can interrupt Janna's R [[SKILL_CHANNEL]]."],
    },
    janna: {
      ko: ["잔나 Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Janna's Q [[AIRBORNE]] and R [[KNOCKBACK]] can interrupt Aatrox's E [[DASH]]."],
    },
  },
};
