// app/data/matchups/briar/briar_gwen.ts
import type { MatchupSummary } from "../_types";

export const briar_gwen: MatchupSummary = {
  champs: ["briar", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 그웬 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 그웬 E의 [[DASH]]을 끊을 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 그웬 E의 [[DASH]]을 따라갈 수 있음. \n 단, 그웬과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Gwen's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Gwen's E [[DASH]].",
        "R2 [[HOMING]] [[DASH]] can follow Gwen's E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Gwen."],
    },
    gwen: {
      ko: ["그웬 W(그면상)의 범위 밖에서 발생하는 브라이어 W의 [[AOE]] 피해 / E의 [[KNOCKBACK]] / R의 [[PROJECTILE]] / R2의 [[AOE]] 효과들을 맞지 않음."],
      en: ["Gwen's W (mist) avoids Briar's W [[AOE]] damage, E [[KNOCKBACK]], R [[PROJECTILE]], and R2 [[AOE]] effects that occur from outside the zone."],
    },
  },

  common: {
    ko: ["브라이어 R의 [[PROJECTILE]]가 그웬에게 적중했을 때 \n 그웬이 W(그면상)를 사용해도 아무런 차이가 없음."],
    en: ["When Briar's R [[PROJECTILE]] hits Gwen, \n it makes no difference even if Gwen uses W (mist)."],
  },
};
