// app/data/matchups/annie/annie_vladimir.ts
import type { MatchupSummary } from "../_types";

export const annie_vladimir: MatchupSummary = {
  champs: ["annie", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 블라디미르(블라디) E의 [[SKILL_CHARGED]]을 끊을 수 있음. \n 단, 블라디 E는 취소되지 않고 충전 분량까지 발사.", 
        "애니 R(티버)의 [[SUMMON]]으로 블라디 E의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["Annie's P [[STUN]] can interrupt Vladimir's E [[SKILL_CHARGED]]. \n However, Vladimir's E is not cancelled — it fires up to the charged amount.", "Annie's R(Tibbers) [[SUMMON]] can block Vladimir's E [[SINGLE]] [[PROJECTILE]]."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
