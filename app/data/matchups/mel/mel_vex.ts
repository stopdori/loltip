// app/data/matchups/mel/mel_vex.ts
import type { MatchupSummary } from "../_types";

export const mel_vex: MatchupSummary = {
  champs: ["mel", "vex"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["멜 W(반사)로 벡스 평타(일반), Q, E, R 반사 가능.\n단, 멜이 벡스 R을 반사하면 벡스는 R2를 사용 할 수 없음.\n단, 멜은 벡스 R을 반사해도 멜이 R2를 사용할 수 없음", "벡스 P의 [[FEAR]]가 활성화 된 스킬을 반사한다면, [[FEAR]]도 반사 적용."],
      en: ["Mel's W can reflect Vex's auto attacks (normal), Q, E, and R.\nHowever, if Mel reflects Vex's R, Vex cannot use R2.\nHowever, even if Mel reflects Vex's R, Mel also cannot use R2.", "If Mel reflects a skill with Vex's P [[FEAR]] activated, [[FEAR]] is also applied to the reflected target."],
    },
    vex: {
      ko: [],
      en: [],
    },
  },
};
