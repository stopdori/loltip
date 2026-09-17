// app/data/matchups/azir/azir_yasuo.ts
import type { MatchupSummary } from "../_types";

export const azir_yasuo: MatchupSummary = {
  champs: ["azir", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 야스오 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Yasuo's E [[DASH]]."],
    },
    yasuo: {
      ko: ["야스오 W의 [[WINDSHIELD]]으로 아지르 Q의 병사 [[DASH]], R의 병사 [[DASH]]을 막을 수 있음. \n 단, W의 모래 병사는 막힌 위치에서 정지. [[CLIP:https://www.youtube.com/shorts/Dq7O5mEAXbU]]"],
      en: ["Yasuo's W [[WINDSHIELD]] can block Azir's Q soldier [[DASH]] and R soldier [[DASH]]. \n However, W's sand soldier stops at the blocked position. [[CLIP:https://www.youtube.com/shorts/Dq7O5mEAXbU]]"],
    },
  },
};
