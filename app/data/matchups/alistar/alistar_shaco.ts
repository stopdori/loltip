// app/data/matchups/alistar/alistar_shaco.ts
import type { MatchupSummary } from "../_types";

export const alistar_shaco: MatchupSummary = {
  champs: ["alistar", "shaco"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 R의 [[CC_CLEANSE]]로 샤코 W, R의 [[FEAR]]를 해제할 수 있음.",
        "알리스타 W의 [[KNOCKBACK]]을 [[INVISIBILITY]]화가 안된 박스에 사용하면, 박스가 [[STUN]]에 걸리고 밀려남 \n 알리스타 W의 [[KNOCKBACK]]을 [[INVISIBILITY]]화된 박스에 사용하면, 박스가 즉시 활성화 되어 [[FEAR]]를 시전하고, 박스가 피해를 입고 밀려나지 않음.",
      ],
      en: ["Alistar's R [[CC_CLEANSE]] can cleanse Shaco's W and R [[FEAR]].", "If Alistar uses W [[KNOCKBACK]] on an un-[[INVISIBILITY]]d box, the box is [[STUN]]ned and knocked back. \n If Alistar uses W [[KNOCKBACK]] on an [[INVISIBILITY]]d box, it activates immediately, applies [[FEAR]], takes damage, but is not knocked back."],
    },
    shaco: {
      ko: [],
      en: [],
    },
  },
};
