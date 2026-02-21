// app/data/matchups/braum/braum_sylas.ts
import type { MatchupSummary } from "../_types";

export const braum_sylas: MatchupSummary = {
  champs: ["braum", "sylas"],
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)가 사일러스 R을 물리적경로로 막을 수 있지만, 대신 브라움 R을 훔침\n예) 브라움 뒤쪽 애쉬의 궁을 사일러스가 강탈할 때 방패를 들면 브라움 궁이 대신 뺏어짐"],
      en: ["If Sylas attempts to steal an ultimate ability from an ally behind Braum (e.g., Ashe's ultimate) while Braum has his Unbreakable shield (E) raised, the projectile will be intercepted by Braum's shield, causing Sylas to steal Braum's ultimate (Glacial Fissure) instead."],
    },
    sylas: {
      ko: [],
      en: [],
    },
  },
};
