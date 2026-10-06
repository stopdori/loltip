// app/data/matchups/mel/mel_zyra.ts
import type { MatchupSummary } from "../_types";

export const mel_zyra: MatchupSummary = {
  champs: ["mel", "zyra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 자이라 평타, W(Q로 [[SUMMON]]된 가시 발사 꽃), E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, [[REFLECT]]된 가시 발사 꽃의 [[PROJECTILE]]는 발사한 식물에게 되돌아가고, 데미지는 2칸.", 
        "W의 [[REFLECT]]로 자이라 Q, W(E로 [[SUMMON]]된 덩굴 채찍 손), R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Zyra's basic attacks, W (thorn-shooting plants [[SUMMON]]ed by Q), and E [[PROJECTILE]]. [[EXIST]] \n However, a [[REFLECT]]ed thorn-shooting plant [[PROJECTILE]] returns to the plant that fired it, dealing 2 ticks of damage.", 
        "W [[REFLECT]] cannot [[REFLECT]] Zyra's Q, W (vine-lashing plants [[SUMMON]]ed by E), or R. [[NOT_EXIST]]"],
    },
    zyra: {
      ko: [],
      en: [],
    },
  },
};
