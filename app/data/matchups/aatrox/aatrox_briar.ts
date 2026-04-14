// app/data/matchups/aatrox/aatrox_briar.ts
import type { MatchupSummary } from "../_types";

export const aatrox_briar: MatchupSummary = {
  champs: ["aatrox", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q의 [[AIRBORNE]]으로 브라이어 Q, W의 [[DASH]]을 끊을 수 있음."],
      en: ["Aatrox's Q [[AIRBORNE]] can interrupt Briar's Q and W [[DASH]]."],
    },
    briar: {
      ko: ["브라이어 E의 [[CAST_COMMIT]]으로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]에 걸려도 시전을 유지할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] can maintain its cast even when hit by Aatrox's Q [[AIRBORNE]] and W [[GRAB]]."],
    },
  },
};
