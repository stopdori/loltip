// app/data/matchups/akali/akali_kennen.ts
import type { MatchupSummary } from "../_types";

export const akali_kennen: MatchupSummary = {
  champs: ["akali", "kennen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["아칼리 E2의 [[HOMING]] [[DASH]]으로 케넨 E 상태와 부딪히면 서로 데미지를 입음."],
      en: ["If Akali's E2 [[HOMING]] [[DASH]] hits Kennen during his E, both take damage."],
    },
    kennen: {
      ko: ["케넨 P의 [[STUN]]로 아칼리 E, E2, R, R2를 끊을 수 없음. 단, [[STUN]]은 남아있음."],
      en: ["Kennen's P [[STUN]] cannot interrupt Akali's E, E2, R and R2. However, [[STUN]] still applies."],
    },
  },
};
