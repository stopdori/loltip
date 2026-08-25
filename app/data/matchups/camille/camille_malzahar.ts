// app/data/matchups/camille/camille_malzahar.ts
import type { MatchupSummary } from "../_types";

export const camille_malzahar: MatchupSummary = {
  champs: ["camille", "malzahar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 말자하 Q의 [[SILENCE]], R의 [[SUPPRESS]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[SUPPRESS]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 말자하 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 말자하 평타, Q를 피할 수 있음. \n E의 [[ST_CONDITIONAL]] [[CHAIN]]는 [[UNTARGETABLE]]로 카밀이 대상에서 제외될 수 있음. \n 단, 카밀에게 걸려있는 E를 피할 수 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Malzahar's Q [[SILENCE]] and R [[SUPPRESS]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[SUPPRESS]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Malzahar's R [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Malzahar's auto-attacks and Q. \n Malzahar's E [[ST_CONDITIONAL]] [[CHAIN]] can exclude Camille as a target due to [[UNTARGETABLE]]. \n However, an E already applied to Camille cannot be dodged."
      ],
    },
    malzahar: {
      ko: ["Q의 [[SILENCE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음.",
        "R의 [[SUPPRESS]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."
      ],
      en: ["Malzahar's Q [[SILENCE]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[SILENCE]] still applies.",
        "Malzahar's R [[SUPPRESS]] can interrupt Camille's E1 and E2 [[DASH]]."
      ],
    },
  },
  common: {
    ko: ["[[TIP]]카밀 E1의 [[CC_BUFFER]]로 말자하 R의 [[SUPPRESS]]을 무시하고 [[DASH]]에 성공했을 때. \n 말자하 R의 최대 [[SKILL_CHANNEL]] 범위를 벗어나면 R이 해제됨. \n 심지어 E2의 [[DASH]]도 가능. [[CLIP:https://www.youtube.com/shorts/3kZJDagkarM]]"],
    en: ["[[TIP]]When Camille's E1 [[CC_BUFFER]] ignores Malzahar's R [[SUPPRESS]] and successfully [[DASH]]es. \n If Camille moves outside Malzahar's R maximum [[SKILL_CHANNEL]] range, the R is cancelled. \n Even the E2 [[DASH]] is possible. [[CLIP:https://www.youtube.com/shorts/3kZJDagkarM]]"],
  },
};
