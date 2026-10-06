// app/data/matchups/mel/mel_taliyah.ts
import type { MatchupSummary } from "../_types";

export const mel_taliyah: MatchupSummary = {
  champs: ["mel", "taliyah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 탈리야 평타, Q(일반, [[EMPOWERED]]), R([[TERRAIN]] 생성)의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, R은 [[REFLECT]]되기 전의 상태와 상관없이 멜에게서 새로 생성되어 탈리야에게 발사하는 판정. [[CLIP:https://www.youtube.com/shorts/Isw8VQ2C9pg]] \n 단, [[REFLECT]]된 R은 [[SKILL_RECAST]]하여 직접 해제할 수 없음.", 
        "W의 [[REFLECT]]로 탈리야 W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 탈리야 R2의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Taliyah's basic attacks, Q (normal, [[EMPOWERED]]), and R ([[TERRAIN]] creation) [[PROJECTILE]]. [[EXIST]] \n However, R is newly created from Mel and fired at Taliyah, regardless of its state before being [[REFLECT]]ed. [[CLIP:https://www.youtube.com/shorts/Isw8VQ2C9pg]] \n However, a [[REFLECT]]ed R cannot be ended manually with [[SKILL_RECAST]].", 
        "W [[REFLECT]] cannot [[REFLECT]] Taliyah's W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Taliyah's R2 [[SKILL_CHANNEL_MOVEMENT]]. [[EXIST]]"],
    },
    taliyah: {
      ko: [],
      en: [],
    },
  },
};
