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
      ko: ["아리 E의 [[CHARM]]으로 카밀 E(그렙, 대기, 돌진단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Camille's E (grapple, wait, and dash phases) [[DASH]]."],
    },
    camille: {
      ko: ["카밀 E의 [[STUN]]으로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "카밀 E(투척단계)의 [[CC_BUFFER]]로 아리 E의 [[CHARM]] 효과를 잠시 무시할 수 있음. \n 단, 카밀 E(그렙단계)가 종료 후 [[CHARM]]이 남아있다면 종료됨.",
        "카밀 R의 [[KNOCKBACK]]으로 아리 R의 [[DASH]]을 끊을 수 있음.", 
        "카밀 R의 [[UNTARGETABLE]], [[TOWER_DODGE]]로 아리 Q, W, E, R을 회피 할 수 있음."],
      en: ["Camille's E [[STUN]] cannot interrupt Ahri's R [[DASH]]. However, the [[STUN]] still applies.", "Camille's E (throw phase) [[CC_BUFFER]] can briefly ignore Ahri's E [[CHARM]].\nHowever, if [[CHARM]] remains after the grapple phase ends, it will still apply.", "Camille's R [[KNOCKBACK]] can interrupt Ahri's R [[DASH]].", "Camille's R [[UNTARGETABLE]] [[TOWER_DODGE]] can dodge Ahri's Q, W, E, and R."],
    },
  },
};
