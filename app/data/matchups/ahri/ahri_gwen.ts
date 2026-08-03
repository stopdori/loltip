// app/data/matchups/ahri/ahri_gwen.ts
import type { MatchupSummary } from "../_types";

export const ahri_gwen: MatchupSummary = {
  champs: ["ahri", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 그웬 E의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Gwen's E [[DASH]]."],
    },
    gwen: {
      ko: ["그웬 W(그면상)의 [[UNTARGETABLE]]로 아리 Q, W, E, R의 [[PROJECTILE]]을 범위 밖에서 피하거나 맞지 않을 수 있음. \n 단, 그웬에게 사용한 평타, W, R의 [[PROJECTILE]]는 날아가던 중 범위 안에 들어올 때 사라짐."],
      en: ["Gwen's W (Hallowed Mist) [[UNTARGETABLE]] can block Ahri's Q, W, E, and R [[PROJECTILE]] if Ahri is outside the mist. \n However, [[PROJECTILE]]s from auto attacks, W, and R that are already in flight will disappear upon entering the mist."],
    },
  },
};
