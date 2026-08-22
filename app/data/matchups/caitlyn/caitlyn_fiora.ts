// app/data/matchups/caitlyn/caitlyn_fiora.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_fiora: MatchupSummary = {
  champs: ["caitlyn", "fiora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 피오라 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Fiora's Q [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    fiora: {
      ko: ["W(응수)의 [[CC_IMMUNE]]으로 케이틀린 W의 [[ROOT]]을 무시할 수 있음."],
      en: ["Fiora's W (Riposte) [[CC_IMMUNE]] can ignore Caitlyn's W [[ROOT]]."],
    },
  },
  common: {
    ko: ["특이한 판정 \n 케이틀린 W([[TRAP]])의 [[ROOT]]을 피오라 Q의 [[DASH]] 도중 W(응수)의 [[CC_IMMUNE]]으로 무시할 수 있음. \n 단, 피오라 W 타이밍에 따라 판정이 다름. \n 1. 피오라가 [[DASH]]으로 덫을 밟고 나서 W를 사용하면 [[CC_IMMUNE]] 적용이 안되고 응수 공격에는 [[SLOW]]. \n 2. 피오라가 [[DASH]]으로 덫을 밟기 전에 W를 사용하면 [[CC_IMMUNE]] 적용되고 응수 공격에는 [[STUN]]. [[CLIP:https://www.youtube.com/shorts/tPOgq8Q1njE]]."],
    en: ["Unusual interaction \n During Fiora's Q [[DASH]], she can ignore Caitlyn's W's ([[TRAP]]) [[ROOT]] with W (Riposte) [[CC_IMMUNE]]. \n However, the outcome differs depending on Fiora's W timing. \n 1. If Fiora uses W after stepping on the trap during her [[DASH]], [[CC_IMMUNE]] does not apply, and the Riposte counter-attack applies [[SLOW]]. \n 2. If Fiora uses W before stepping on the trap during her [[DASH]], [[CC_IMMUNE]] applies, and the Riposte counter-attack applies [[STUN]]. [[CLIP:https://www.youtube.com/shorts/tPOgq8Q1njE]]."],
  },
};
