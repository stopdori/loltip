// app/data/matchups/camille/camille_lulu.ts
import type { MatchupSummary } from "../_types";

export const camille_lulu: MatchupSummary = {
  champs: ["camille", "lulu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 룰루 W의 [[POLYMORPH]], R의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[POLYMORPH]]가 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 룰루 평타, Q, W, E, R([[AIRBORNE]])을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Lulu's W [[POLYMORPH]] and R [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[POLYMORPH]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Lulu's auto-attacks, Q, W, E, and R ([[AIRBORNE]])."
      ],
    },
    lulu: {
      ko: ["W의 [[POLYMORPH]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[POLYMORPH]]은 남아있음.",
        "R의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Lulu's W [[POLYMORPH]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[POLYMORPH]] still applies.",
        "Lulu's R [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
  common: {
    ko: ["[[TIP]]특이한 판정 - 상급 \n 일반적으로 \n E1( 투척 단계 )의 [[CC_BUFFER]]로 룰루 W의 [[POLYMORPH]]를 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있고 \n [[POLYMORPH]]가 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있지만. \n 가끔, 카밀 E1이 완전히 해제되었는데도 E2를 사용할 수 있음. [[CLIP:https://www.youtube.com/shorts/RjSx83LR03c]]"],
    en: ["[[TIP]]Unusual interaction - Advanced \n Normally, \n Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Lulu's W [[POLYMORPH]] and continue into the E1 (Wall-dash phase) [[DASH]], \n and if the [[POLYMORPH]] remains until the E1 (Hold phase), Camille's E may be cancelled. \n However, sometimes Camille can still use E2 even after E1 has been fully cancelled. [[CLIP:https://www.youtube.com/shorts/RjSx83LR03c]]"],
  },
};
