// app/data/matchups/blitzcrank/blitzcrank_camille.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_camille: MatchupSummary = {
  champs: ["blitzcrank", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: ["Q의 [[GRAB]], E의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[SILENCE]]이 카밀 E1, E2의 [[DASH]]을 끊을 수 없음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Blitzcrank's R [[SILENCE]] cannot interrupt Camille's E1 and E2 [[DASH]]."],
    },
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 블리츠 크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.",
        "R의 [[UNTARGETABLE]]로 블리츠 크랭크 Q, E, R을 피할 수 있음.",
        "R의 [[UNTARGETABLE]]로 블리츠 크랭크 E(강화 평타)를 피할 수 없음. [[CLIP:https://www.youtube.com/shorts/gHkviZN3lww]]"
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Blitzcrank's Q [[GRAB]], E [[AIRBORNE]], and R [[SILENCE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Blitzcrank's Q, E, and R.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Blitzcrank's E (empowered auto-attack). [[CLIP:https://www.youtube.com/shorts/gHkviZN3lww]]"
      ],
    },
  },
};
