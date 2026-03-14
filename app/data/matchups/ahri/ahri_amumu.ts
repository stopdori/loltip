// app/data/matchups/ahri/ahri_amumu.ts
import type { MatchupSummary } from "../_types";

export const ahri_amumu: MatchupSummary = {
  champs: ["ahri", "amumu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E로 아무무 Q를 끊을 수 있음"],
      en: ["Ahri's E can interrupt Amumu's Q"],
    },
    amumu: {
      ko: ["아무무 Q로 아리 R을 끊을 수 없고 아리를 따라갈 수 있음. 단, [[STUN]]은 남아있음", "아무무 R로 아리 R을 끊을 수 있음. Q, R 둘다 같은 [[STUN]]인데 판정이 다름", "아무무 Q로 아리 E의 [[CHARM]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[CHARM]]도 남아있음."],
      en: ["Amumu's Q cannot interrupt Ahri's R but can follow her. The [[STUN]] still applies.", "Amumu's R can interrupt Ahri's R. Both Q and R apply the same [[STUN]], but their interrupt interactions differ.", "Amumu's Q is affected by Ahri's E [[CHARM]], but can still move if the dash phase activates.\nHowever, damage is applied and [[CHARM]] remains active."],
    },
  },
};
