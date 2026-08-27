// app/data/matchups/cassiopeia/cassiopeia_zed.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_zed: MatchupSummary = {
  champs: ["cassiopeia", "zed"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["[[TIP]]제드 R1은 제드가 사라졌다가 항상 상대 등 뒤에서 [[BLINK]]으로 등장하기 때문에 \n 카시오페아 R을 뒤쪽으로 사용할 준비를 하면 [[STUN]]을 발동시킬 확률이 높음."],
      en: ["[[TIP]] Zed's R1 always makes Zed vanish and then reappear via [[BLINK]] behind the target, \n so preparing to cast Cassiopeia's R behind you gives a high chance of triggering the [[STUN]]."],
    },
    zed: {
      ko: ["W2, R1, R2는 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, W1은 사용할 수 있음."],
      en: ["W2, R1, and R2 [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, W1 can still be used."],
    },
  },
};
