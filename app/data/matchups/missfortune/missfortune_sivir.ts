// app/data/matchups/missfortune/missfortune_sivir.ts
import type { MatchupSummary } from "../_types";

export const missfortune_sivir: MatchupSummary = {
  champs: ["missfortune", "sivir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    missfortune: {
      ko: [],
      en: [],
    },
    sivir: {
      ko: ["시비르 E의 [[SPELL_SHIELD]]는 미스포츈 Q 스킬의 데미지를 무시할 수 있음. \n 미스포츈 P의 [[ON_HIT]] 효과도 함께 무시. \n 시비르가 첫 번째 대상일 때 [[SPELL_SHIELD]]를 사용하면, 정상적으로 [[CHAIN]] 가능. 두 번째 대상은 피해도 받음.", 
      "시비르 E의 [[SPELL_SHIELD]]로 미스포츈 [[BA]]의 [[ON_HIT]] / E, R의 [[DOT]]를 막을 수 없음."],
      en: ["Sivir E's [[SPELL_SHIELD]] can block the damage from Miss Fortune's Q. \n It also blocks MF's P [[ON_HIT]] effect. \n If Sivir is the first target and uses [[SPELL_SHIELD]], the [[CHAIN]] can proceed normally — the second target still takes damage.",
      "Sivir E's [[SPELL_SHIELD]] cannot block Miss Fortune [[BA]]'s [[ON_HIT]] or the [[DOT]] from E and R."],
    },
  },
};
