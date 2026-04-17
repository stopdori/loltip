// app/data/matchups/anivia/anivia_mel.ts
import type { MatchupSummary } from "../_types";

export const anivia_mel: MatchupSummary = {
  champs: ["anivia", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["멜 W([[REFLECT]])로 애니비아 Q, E를 반사 할 수 있음.\n단, 애니비아 Q를 반사했을 때 애니비아의 Q2를 사용할 수는 없음. 그대로 쭉 날아감."],
      en: ["Mel's W [[REFLECT]] can reflect Anivia's Q and E.\nHowever, when Q is reflected, Anivia cannot detonate it with Q2 — it flies straight through."],
    },
    mel: {
      ko: ["멜 W([[REFLECT]])로 애니비아 Q, E의 [[PROJECTILE]]를 반사 할 수 있음. \n 단, 애니비아 Q를 반사했을 때 애니비아의 Q2를 사용할 수는 없음. 그대로 쭉 날아감."],
      en: ["Mel's W [[REFLECT]] can reflect Anivia's Q and E [[PROJECTILE]]. \n However, when Q is reflected, Anivia cannot detonate it with Q2 — it flies straight through."],
    },
  },
};
