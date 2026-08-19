// app/data/matchups/annie/annie_bard.ts
import type { MatchupSummary } from "../_types";

export const annie_bard: MatchupSummary = {
  champs: ["annie", "bard"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 바드 E(터널)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 바드 Q의 [[PIERCE_ONCE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Bard's E(Magical Journey) [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Bard's Q [[PIERCE_ONCE]] [[PROJECTILE]]."],
    },
    bard: {
      ko: ["바드 R(존야)을 애니 E가 걸린 대상에게 맞히면 바드에게 반사 데미지가 들어옴. \n 또한, 티버에 생기는 추가 보호막에도 반사 데미지 적용. \n 결론, 바드 R(존야)로 둘 다 맞히면 데미지가 둘 다 들어옴."],
      en: ["If Bard's R (Stasis) hits a target affected by Annie's E, Bard takes reflected damage. \n This reflect also applies to the extra shield placed on Tibbers. \n In conclusion, if Bard's R (Stasis) hits both, Bard takes damage from both."],
    },
  },
};
