// app/data/matchups/caitlyn/caitlyn_zed.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_zed: MatchupSummary = {
  champs: ["caitlyn", "zed"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: [],
      en: [],
    },
    zed: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["[[TIP]] 제드 W, R의 그림자 위치에 케이틀린 W([[TRAP]])를 미리 설치해두면 제드의 플레이가 제약됨.",
      "[[TIP]]적군 제드가 R을 사용하면 \n 사라졌다 등장하는 위치는 항상 정해져 있음. ( 제드가 R을 사용한 대상 뒤쪽 ) \n \n 이걸 이용하여 케이틀린 발밑 조금 뒤쪽에 케이틀린 W([[TRAP]])를 미리 설치하여 활성화시켜 놓으면. \n 제드가 등장할 때 W([[TRAP]])가 즉시 발동."],
    en: ["[[TIP]] If you pre-place Caitlyn's W ([[TRAP]]) at Zed's W and R shadow spots, it restricts his play.",
      "[[TIP]] When enemy Zed uses R, \n the spot where he vanishes and reappears is always fixed. (behind the target he used R on) \n \n Using this, if you pre-place and activate Caitlyn's W ([[TRAP]]) slightly behind Caitlyn's own feet, \n the W ([[TRAP]]) triggers immediately when Zed reappears."],
  },
};
