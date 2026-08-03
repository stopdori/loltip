// app/data/matchups/akali/akali_pantheon.ts
import type { MatchupSummary } from "../_types";

export const akali_pantheon: MatchupSummary = {
  champs: ["akali", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 판테온 W의 [[DASH]]을 따라갈 수 있음.", 
        "E2의 [[HOMING]] [[DASH]]으로 판테온 R의 [[BLINK]]을 따라갈 수 있음. \n 단, 아칼리가 판테온이 점프하기 전에 E2를 사용하면 이전 위치에서 멈추고, 판테온이 강하했을 때 사용하면 [[BLINK]] 위치로 따라감. \n 단, 아칼리 E1의 지속시간이 짧은 편이라 타이밍 잘 맞게 사용해야 판테온 R의 [[BLINK]]를 따라갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Pantheon's W [[DASH]].",
        "E2 [[HOMING]] [[DASH]] can follow Pantheon's R [[BLINK]]. \n However, if Akali uses E2 before Pantheon leaps, she stops at the previous location; if used after Pantheon has landed, she follows to the [[BLINK]] destination. \n Note that Akali's E1 duration is short, so the timing must be precise to follow Pantheon's R [[BLINK]]."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
