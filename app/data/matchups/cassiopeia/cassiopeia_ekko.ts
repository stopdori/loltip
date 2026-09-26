// app/data/matchups/cassiopeia/cassiopeia_ekko.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_ekko: MatchupSummary = {
  champs: ["cassiopeia", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 에코 E의 [[DASH]], [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Ekko's E [[DASH]] and [[BLINK]]. \n However, the [[STUN]] still applies."],
    },
    ekko: {
      ko: ["E(경직 단계)의 [[CC_BUFFER]]로 카시오페아 R의 [[STUN]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[STUN]]은 남아있음.", 
        "카시오페아 W의 [[GROUNDED]] 효과를 받을 때 에코 E(구르기), R을 사용할 수 없음. [[NOT_EXIST]] \n 단, E의 [[RANGE_UP]] 효과가 없는 것처럼 근접에서만 공격 가능. \n 단, E의 공격 모션이 발동하면 대상이 움직여도 [[BLINK]]이 정상적으로 발동."],
      en: ["E [[DASH]] and [[BLINK]] / R [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, when E's attack — classified as [[BLINK]] — is affected by Cassiopeia's W [[GROUNDED]], \n it can only attack at melee range, as if the [[RANGE_UP]] effect doesn't apply. \n However, once E's [[BA]] triggers, the [[BLINK]] also functions normally."],
    },
  },
};
