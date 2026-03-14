// app/data/matchups/aatrox/aatrox_amumu.ts
import type { MatchupSummary } from "../_types";

export const aatrox_amumu: MatchupSummary = {
  champs: ["aatrox", "amumu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W의 [[GRAB]]효과로 아무무 Q를 끊을 수 있음."],
      en: ["Aatrox's Q edge and W's [[GRAB]] effect can interrupt Amumu's Q"],
    },
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 아트록스 E를 끊을 수 있음.", "아무무 Q로 아트록스 Q의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효"],
      en: ["Amumu's Q and R [[STUN]] can interrupt Aatrox's E.", "Amumu's Q is affected by Aatrox's Q [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
  },
};
