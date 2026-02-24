// app/data/matchups/gragas/gragas_poppy.ts
import type { MatchupSummary } from "../_types";

export const gragas_poppy: MatchupSummary = {
  champs: ["gragas", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gragas: {
      ko: [],
      en: [],
    },
    poppy: {
      ko: ["뽀삐 W가 그라가스 E를 막음.\n단, 그라가스가 범위 밖에서 [[E_FLASH]]이나 근접으로 E를 쓰면 스킬이 유효하고 뽀삐 W에 저지당하지도 않음", "뽀삐 E가 그라가스 E 판정을 이김.\n단, 그라가스 E의 데미지와 [[STUN]]이 뽀삐에게 걸림"],
      en: ["Poppy's W blocks Gragas's E.\nHowever, if Gragas uses [[E_FLASH]] from outside the range or uses E at point-blank range, the skill remains effective and is not interrupted by Poppy's W", "Poppy's E wins the priority over Gragas's E.\nHowever, Poppy still takes damage and gets [[STUN]] from Gragas's E"],
    },
  },
};
