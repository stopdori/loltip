// app/data/matchups/azir/azir_galio.ts
import type { MatchupSummary } from "../_types";

export const azir_galio: MatchupSummary = {
  champs: ["azir", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 갈리오 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음. \n 단, W의 [[TAUNT]]은 해제될 때 발동.",
        "아지르 R의 [[KNOCKBACK]]과 갈리오 E의 [[DASH]]은 판정이 다양함. \n 1. 갈리오 E의 후진 단계에 [[KNOCKBACK]]을 맞았을때. \n 1-1. 갈리오의 몸이 벽에서 벗어나고 [[DASH]]이 발동하면 무시하고 [[DASH]] \n 1-2. 갈리오의 몸이 벽에서 벗어나지 못하고 [[DASH]]이 발동하면, 벽에 막혀 [[DASH]]하지 못함. \n 1-3. 갈리오의 몸이 후진 단계에 적 챔피언과 겹쳐지면 [[KNOCKBACK]]과 상관없이 스킬이 적중하고 [[AIRBORNE]]. \n 2. 갈리오 E의 돌진 단계에 [[KNOCKBACK]]을 맞았을때. 갈리오의 스킬 무효화. 즉, [[DASH]] 불가."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Galio's W and R [[SKILL_CHANNEL]]. \n However, W's [[TAUNT]] triggers when it ends.",
        "The interaction between Azir's R [[KNOCKBACK]] and Galio's E [[DASH]] has various outcomes. \n 1. When [[KNOCKBACK]] hits during Galio's E retreat phase: \n 1-1. If Galio's body exits the wall and [[DASH]] activates, it ignores [[KNOCKBACK]] and [[DASH]]es. \n 1-2. If Galio's body cannot exit the wall and [[DASH]] activates, the [[DASH]] is blocked by the wall. \n 1-3. If Galio's body overlaps an enemy during the retreat phase, the skill hits and [[AIRBORNE]]s regardless of [[KNOCKBACK]]. \n 2. When [[KNOCKBACK]] hits during Galio's E charge phase: Galio's skill is negated, i.e., [[DASH]] is impossible."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
