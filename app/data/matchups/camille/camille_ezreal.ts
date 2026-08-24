// app/data/matchups/camille/camille_ezreal.ts
import type { MatchupSummary } from "../_types";

export const camille_ezreal: MatchupSummary = {
  champs: ["camille", "ezreal"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]]으로 이즈리얼 E의 [[BLINK]]을 끊을 수 없음.",
      "R의 [[UNTARGETABLE]]로 이즈리얼 평타, Q, W, E, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]] cannot interrupt Ezreal's E [[BLINK]].",
      "Camille's R [[UNTARGETABLE]] can dodge Ezreal's basic attacks, Q, W, E, and R."],
    },
    ezreal: {
      ko: ["E의 [[CC_BUFFER]]로 카밀 E의 [[KNOCKBACK]], [[STUN]] / R의 [[KNOCKBACK]], [[GRAB]]을 무시하고 E의 [[BLINK]] 할 수 있음. \n 단, [[STUN]]은 남아있음. \n 단, 카밀 R의 [[ZONE]] 범위 밖으로 E의 [[BLINK]] 하면, 강제로 [[ZONE]] [[AOE]] 안으로 [[GRAB]]되어 돌아옴."],
      en: ["Ezreal's E [[CC_BUFFER]] can ignore Camille's E [[KNOCKBACK]], [[STUN]] / R [[KNOCKBACK]], [[GRAB]] and still [[BLINK]] with E. \n However, the [[STUN]] still applies. \n However, if he [[BLINK]]s with E outside Camille's R [[ZONE]] range, he is forcibly pulled back into the [[ZONE]] [[AOE]] by the [[GRAB]]."],
    },
  },
};
