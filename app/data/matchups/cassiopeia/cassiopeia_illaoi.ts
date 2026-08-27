// app/data/matchups/cassiopeia/cassiopeia_illaoi.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_illaoi: MatchupSummary = {
  champs: ["cassiopeia", "illaoi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 일라오이 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Illaoi's W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    illaoi: {
      ko: ["W는 [[DASH]] 판정이 아니어서 사용할 수 있지만 \n 공격할 때가 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받으면 \n [[RANGE_UP]] 효과가 없는 것처럼 근접에서만 공격 가능. \n 단, [[DASH]]만 없을 뿐 정상적으로 작동."],
      en: ["W itself is not classified as [[DASH]], so it can still be used. \n However, when W's attack — classified as [[DASH]] — is affected by Cassiopeia's W [[GROUNDED]], \n it can only attack at melee range, as if the [[RANGE_UP]] effect doesn't apply. \n However, aside from losing the [[DASH]], it still functions normally."],
    },
  },
};
