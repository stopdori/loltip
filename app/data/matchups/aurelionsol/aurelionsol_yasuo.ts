// app/data/matchups/aurelionsol/aurelionsol_yasuo.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_yasuo: MatchupSummary = {
  champs: ["aurelionsol", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 야스오 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] and R (Falling Star) [[AIRBORNE]] can interrupt Yasuo's E [[DASH]]."],
    },
    yasuo: {
      ko: ["야스오 W([[WINDSHIELD]])로 아우렐리온 솔 Q를 막을 수 없음.",
        "야스오 W([[WINDSHIELD]])로 아우렐리온 솔 R의 [[PROJECTILE]]는 막을 수 있지만, 사라지지 않고 장막 앞에 떨어짐."],
      en: ["Yasuo's W [[WINDSHIELD]] cannot block Aurelion Sol's Q.",
        "Yasuo's W [[WINDSHIELD]] can block Aurelion Sol's R [[PROJECTILE]], but it does not disappear — it lands in front of the wall."],
    },
  },
};
