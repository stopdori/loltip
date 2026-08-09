// app/data/matchups/anivia/anivia_nocturne.ts
import type { MatchupSummary } from "../_types";

export const anivia_nocturne: MatchupSummary = {
  champs: ["anivia", "nocturne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["W(벽)의 [[AIRBORNE]]으로 녹턴 E의 [[SPELL_SHIELD]]를 낭비시킬 수 없음."],
      en: ["W (wall) [[AIRBORNE]] cannot waste Nocturne's E [[SPELL_SHIELD]]."],
    },
    nocturne: {
      ko: ["녹턴 Q로 애니비아를 맞히고 애니비아가 P(알)로 변해도 녹턴 Q의 디버프는 묻어있음.", "녹턴 R2로 애니비아에게 날아갈 때, 애니비아가 P(알)로 변해도 P(알)로 돌진."],
      en: ["Nocturne's Q trail persists on Anivia even after she transforms into P (Egg).", "When Nocturne's R2 is dashing toward Anivia, it continues to chase the P (Egg) if Anivia transforms."],
    },
  },
};
