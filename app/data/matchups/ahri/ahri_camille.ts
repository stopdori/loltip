// app/data/matchups/ahri/ahri_camille.ts
import type { MatchupSummary } from "../_types";

export const ahri_camille: MatchupSummary = {
  champs: ["ahri", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 카밀 E(그렙, 대기, 돌진 단계)를 끊을 수 있음.\n즉, 데미지도 무효."],
      en: ["Ahri's E can interrupt Camille's E (grapple/dash phase)"],
    },
    camille: {
      ko: ["카밀 E의 [[STUN]]으로 아리 R의 [[DASH]]을 끊을 수 없음.\n단, [[STUN]]은 남아있음.", "카밀 R의 [[KNOCKBACK]]으로 아리 R의 [[DASH]]을 끊을 수 있음", "카밀 R의 [[UNTARGETABLE]], [[TOWER_DODGE]]로 아리 Q, W, E, R을 회피 할 수 있음."],
      en: ["Camille's E [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies.", "Camille's R [[KNOCKBACK]] can interrupt Ahri's R", "Camille's R [[UNTARGETABLE]] can dodge Ahri's Q, W, E, and R"],
    },
  },
};
