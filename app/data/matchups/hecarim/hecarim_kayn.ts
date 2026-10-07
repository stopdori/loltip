// app/data/matchups/hecarim/hecarim_kayn.ts
import type { MatchupSummary } from "../_types";

export const hecarim_kayn: MatchupSummary = {
  champs: ["hecarim", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 (케인 / 그암 / 다르킨) Q의 [[DASH]], E(벽이동)의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R의 [[UNSTOPPABLE]]로 다르킨 W의 [[AIRBORNE]]을 무시할 수 있음. [[EXIST]]"],
      en: ["E [[KNOCKBACK]] and R [[FEAR]] can interrupt (Kayn / Shadow Assassin / Darkin) Q [[DASH]] and E (wall travel) [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R [[UNSTOPPABLE]] can ignore Darkin W [[AIRBORNE]]. [[EXIST]]"],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
