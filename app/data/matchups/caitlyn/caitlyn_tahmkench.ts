// app/data/matchups/caitlyn/caitlyn_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_tahmkench: MatchupSummary = {
  champs: ["caitlyn", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 탐켄치 W의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Tahm Kench's W [[SKILL_CHANNEL]]."],
    },
    tahmkench: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["[[TIP]]케이틀린, 탐켄치가 다른 팀일 때 \n \n 1. 탐켄치 발밑에 케이틀린 W([[TRAP]])와 탐켄치 W(다른 장소에 시전)를 동시에 사용한다면 \n 탐켄치가 [[TRAP]]을 밟지만 W로 [[BLINK]]. \n 단, [[ROOT]]과 헤드샷은 남아있음. [[CLIP:https://youtube.com/shorts/AnUy33rWYvM?feature=share]] \n \n 2. 탐켄치 W 사용순간을 케이틀린이 관측하자마자 중앙에 [[TRAP]]을 설치한다면 \n ( 작성자 반응속도 150 ~ 200ms) \n 탐켄치 W의 [[BLINK]]이 케이틀린 [[TRAP]]에 걸리기 전에 발동. \n \n 3. 탐켄치 W의 도착지점 [[BLINK]]의 전조 [[ZONE]]을 \n 케이틀린이 관측하자마자 (정말 칼같이) 중앙에 [[TRAP]]을 설치한다면 \n 탐켄치 W의 [[BLINK]]으로 도착하고 [[TIMING_AFTERCAST]] 때문에 [[TRAP]]을 피할 수 없음."],
    en: ["[[TIP]] When Caitlyn and Tahm Kench are on opposing teams, \n \n 1. If Caitlyn's W ([[TRAP]]) is placed under Tahm Kench's feet at the same time Tahm Kench casts W elsewhere (targeting a different location), \n Tahm Kench steps on the [[TRAP]] but still [[BLINK]]s via W. \n However, the [[ROOT]] and headshot still apply. [[CLIP:https://youtube.com/shorts/AnUy33rWYvM?feature=share]] \n \n 2. If Caitlyn places a [[TRAP]] at the center as soon as she spots the moment Tahm Kench casts W, \n (the author's reaction time: 150–200ms) \n Tahm Kench's W [[BLINK]] activates before he gets caught by Caitlyn's [[TRAP]]. \n \n 3. If Caitlyn spots the telegraph [[ZONE]] for Tahm Kench's W [[BLINK]] landing spot \n and places a [[TRAP]] at its center the instant she sees it (with perfect timing), \n Tahm Kench arrives via the W [[BLINK]] and cannot avoid the [[TRAP]] due to [[TIMING_AFTERCAST]]."],
  },
};
