// app/data/matchups/caitlyn/caitlyn_twistedfate.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_twistedfate: MatchupSummary = {
  champs: ["caitlyn", "twistedfate"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 트위스티드 페이트 R2의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Twisted Fate's R2 [[SKILL_CHANNEL]]."],
    },
    twistedfate: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["[[TIP]]케이틀린, 트위스티드 페이트가 다른 팀일 때 \n \n 트페 R2의 도착지점 [[BLINK]]의 전조 [[ZONE]]을 \n 케틀이 관측하자마자 중앙에 [[TRAP]]을 설치한다면 ( 작성자 반응속도 150 ~ 200ms ) \n 트페 R2의 [[BLINK]]으로 도착하고 [[TRAP]]을 피할 수 없음. \n 500ms 까지 여유 되는걸로 보여짐. [[CLIP:https://youtube.com/shorts/eLkPK2U1mDI?feature=share]]"],
    en: ["[[TIP]] When Caitlyn and Twisted Fate are on opposing teams, \n \n if Caitlyn spots the telegraph [[ZONE]] for Twisted Fate's R2 [[BLINK]] landing spot \n and places a [[TRAP]] at its center as soon as she sees it (the author's reaction time: 150–200ms), \n Twisted Fate arrives via the R2 [[BLINK]] and cannot avoid the [[TRAP]]. \n It seems there's up to about 500ms of leeway. [[CLIP:https://youtube.com/shorts/eLkPK2U1mDI?feature=share]]"],
  },
};
