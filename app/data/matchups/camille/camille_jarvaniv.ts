// app/data/matchups/camille/camille_jarvaniv.ts
import type { MatchupSummary } from "../_types";

export const camille_jarvaniv: MatchupSummary = {
  champs: ["camille", "jarvaniv"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 자르반 EQ의 [[AIRBORNE]], R([[TERRAIN]])의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 자르반 EQ의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 자르반 Q / W의 [[SLOW]] / E / R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Jarvan IV's EQ [[AIRBORNE]] and R ([[TERRAIN]]) [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Jarvan IV's EQ [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Jarvan IV's Q / W [[SLOW]] / E / R."
      ],
    },
    jarvaniv: {
      ko: ["EQ의 [[AIRBORNE]], R([[TERRAIN]])의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Jarvan IV's EQ [[AIRBORNE]] and R ([[TERRAIN]]) [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
