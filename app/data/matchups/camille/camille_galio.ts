// app/data/matchups/camille/camille_galio.ts
import type { MatchupSummary } from "../_types";

export const camille_galio: MatchupSummary = {
  champs: ["camille", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 갈리오 W의 [[SKILL_CHARGED]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. \n 단, 갈리오 W는 중단될 때 시전.",
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 갈리오 W의 [[TAUNT]] / E, R의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[TAUNT]]가 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.",
      "R의 [[UNTARGETABLE]]로 갈리오 Q, W, E, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Galio's W [[SKILL_CHARGED]] and R [[SKILL_CHANNEL]]. \n However, Galio's W still triggers when interrupted.",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Galio's W [[TAUNT]] / E and R [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[TAUNT]] remains until the E1 (Hold phase), Camille's E is cancelled.",
      "Camille's R [[UNTARGETABLE]] can dodge Galio's Q, W, E, and R."],
    },
    galio: {
      ko: ["W의 [[TAUNT]] / E, R의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Galio's W [[TAUNT]] / E and R [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
