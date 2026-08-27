// app/data/matchups/amumu/amumu_vladimir.ts
import type { MatchupSummary } from "../_types";

export const amumu_vladimir: MatchupSummary = {
  champs: ["amumu", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q, R의 [[STUN]]로 블라디 E의 [[SKILL_CHARGED]]을 끊을 수 있음. \n 단, 끊길 때 모았던 만큼의 [[SKILL_CHARGED]]은 발사.", 
        "Q로 블라디를 맞혔을 때, 블라디가 정화를 사용하고 W(웅덩이)의 [[TRANSFORM]]으로 이동한다면, 아무무는 끝까지 따라감."],
      en: ["Q and R [[STUN]] can interrupt Vladimir's E [[SKILL_CHARGED]]. \n However, Vladimir's E is not cancelled and fires up to the charged amount.", "When Amumu's Q hits Vladimir, if Vladimir uses Cleanse and moves with W [[TRANSFORM]], Amumu follows all the way."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
