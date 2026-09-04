// app/data/matchups/drmundo/drmundo_vayne.ts
import type { MatchupSummary } from "../_types";

export const drmundo_vayne: MatchupSummary = {
  champs: ["drmundo", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 베인 E의 [[KNOCKBACK]], [[STUN]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]]. \n 단, 베인 E의 [[KNOCKBACK]] 이후 추가로 발생해야 하는 [[STUN]]은 [[KNOCKBACK]]이 걸리지 않아 발생하지 않음."],
      en: ["P's [[CC_IMMUNE]] effect can ignore Vayne's E [[KNOCKBACK]] and [[STUN]] once.\nAt this time, P also [[DROP]]s a canister.\nHowever, since the [[KNOCKBACK]] does not apply, the [[STUN]] that would normally follow Vayne's E [[KNOCKBACK]] does not occur."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
