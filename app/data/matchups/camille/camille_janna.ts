// app/data/matchups/camille/camille_janna.ts
import type { MatchupSummary } from "../_types";

export const camille_janna: MatchupSummary = {
  champs: ["camille", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 잔나 Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 잔나 평타 / Q / W / R의 [[KNOCKBACK]]을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Janna's Q [[AIRBORNE]] and R [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Janna's R [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Janna's basic attacks / Q / W / R [[KNOCKBACK]]."
      ],
    },
    janna: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Janna's Q [[AIRBORNE]] and R [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
