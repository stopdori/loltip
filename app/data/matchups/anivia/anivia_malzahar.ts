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
      ko: ["애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 말자하 P의 [[CC_IMMUNE]]을 소모 시킬 수 있음."],
      en: ["Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] can consume Malzahar's P [[CC_IMMUNE]]."],
    },
    malzahar: {
      ko: ["말자하 P의 [[CC_IMMUNE]]으로 애니비아 Q의 [[STUN]], W의 [[AIRBORNE]]을 무시할 수 있음.\n단, 애니비아 W(벽)은 진짜 [[AIRBORNE]]이기 때문에 말자하 P의 [[CC_IMMUNE]]을 소모시킬 수 있음."],
      en: ["Malzahar's P [[CC_IMMUNE]] can ignore Anivia's Q [[STUN]] and W [[AIRBORNE]].\nHowever, since Anivia's W (wall) is a true [[AIRBORNE]], it can consume Malzahar's P [[CC_IMMUNE]]."],
    },
  },
};
