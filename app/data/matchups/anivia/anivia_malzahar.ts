// app/data/matchups/anivia/anivia_malzahar.ts
import type { MatchupSummary } from "../_types";

export const anivia_malzahar: MatchupSummary = {
  champs: ["anivia", "malzahar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: [],
      en: [],
    },
    malzahar: {
      ko: ["말자하 P의 [[CC_IMMUNE]]으로 애니비아 Q의 [[STUN]], W의 [[AIRBORNE]]을 무시할 수 있음. \n 단, Q의 데미지는 감소되어 유효. \n 단, 애니비아 W([[TERRAIN]])은 진짜 [[AIRBORNE]]이기 때문에 말자하 P의 [[CC_IMMUNE]]이 소모됨."],
      en: ["Malzahar's P [[CC_IMMUNE]] can ignore Anivia's Q [[STUN]] and W [[AIRBORNE]].\nHowever, since Anivia's W (wall) is a true [[AIRBORNE]], it can consume Malzahar's P [[CC_IMMUNE]]."],
    },
  },
};
