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
      ko: ["E는 [[DASH]], [[BLINK]] / R은 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, E는 공격할 때가 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받으면 \n [[RANGE_UP]] 효과가 없는 것처럼 근접에서만 공격 가능. \n 단, E의 [[BA]]가 발동하면 [[BLINK]]도 정상적으로 작동."],
      en: ["E [[DASH]] and [[BLINK]] / R [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, when E's attack — classified as [[BLINK]] — is affected by Cassiopeia's W [[GROUNDED]], \n it can only attack at melee range, as if the [[RANGE_UP]] effect doesn't apply. \n However, once E's [[BA]] triggers, the [[BLINK]] also functions normally."],
    },
  },
};
