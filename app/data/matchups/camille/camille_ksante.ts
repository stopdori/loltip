// app/data/matchups/camille/camille_ksante.ts
import type { MatchupSummary } from "../_types";

export const camille_ksante: MatchupSummary = {
  champs: ["camille", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 크산테 Q3의 [[GRAB]], W의 [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E1( 투척 단계 )의 [[CC_BUFFER]]로도 크산테 R의 [[SUPPRESS]]을 무시할 수 없음.",
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 크산테 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 크산테 기본폼 Q, Q3, W / 변신폼 W를 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore K'Sante's Q3 [[GRAB]] and W [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] cannot ignore K'Sante's R [[SUPPRESS]], even with it active.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt K'Sante's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge K'Sante's normal form Q, Q3, W / transformed form W."
      ],
    },
    ksante: {
      ko: ["Q의 [[GRAB]], W의 [[KNOCKBACK]], R의 [[SUPPRESS]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["K'Sante's Q [[GRAB]], W [[KNOCKBACK]], and R [[SUPPRESS]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
  common: {
    ko: ["[[TIP]]특이한 판정 - 상급 \n 카밀 E1( 투척 단계 )의 [[CC_BUFFER]]로도 크산테 R의 [[SUPPRESS]], [[AIRBORNE]], [[STUN]], [[BLINK]]을 무시할 수 없음. \n 크산테 R을 정말 얇은 벽에서 사용하고 \n 카밀 갈고리를 정말 먼 곳에 걸어도 크산테 판정이 우세. \n 혹시나 카밀 갈고리 길이가 너무 멀어져서 끊기는 것인지 의심되어 따로 실험해 봤는데 갈고리 길이 문제는 아닌 것으로 보임. [[CLIP:https://youtube.com/shorts/P4YoZSx0MEo]]"],
    en: ["[[TIP]]Unusual interaction - advanced \n Even Camille's E1 (Throw phase) [[CC_BUFFER]] cannot ignore K'Sante's R [[SUPPRESS]], [[AIRBORNE]], [[STUN]], and [[BLINK]]. \n Even when K'Sante uses R on a very thin wall \n and Camille's hook is thrown from very far away, K'Sante's interaction still wins out. \n I suspected this might be caused by Camille's hook range stretching too far and getting interrupted, so I tested that separately, but it doesn't appear to be a hook-length issue. [[CLIP:https://youtube.com/shorts/P4YoZSx0MEo]]"],
  },
};
