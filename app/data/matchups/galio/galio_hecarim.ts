// app/data/matchups/galio/galio_hecarim.ts
import type { MatchupSummary } from "../_types";

export const galio_hecarim: MatchupSummary = {
  champs: ["galio", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    galio: {
      ko: [""],
      en: [""],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 갈리오 W의 [[SKILL_CHARGED]], E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. \n 단, 갈리오 W는 중단될 때 시전.",
        "R의 [[UNSTOPPABLE]]로 갈리오 W의 [[TAUNT]] / E, R의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[TAUNT]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Galio's W [[SKILL_CHARGED]], E [[DASH]] and R [[SKILL_CHANNEL]]. \n However, Galio's W still triggers when interrupted.",
        "R [[UNSTOPPABLE]] can ignore Galio's W [[TAUNT]] / E and R [[AIRBORNE]]. \n However, [[TAUNT]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
