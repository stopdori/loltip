// app/data/matchups/gragas/gragas_qiyana.ts
import type { MatchupSummary } from "../_types";

export const gragas_qiyana: MatchupSummary = {
  champs: ["gragas", "qiyana"],
  highlightsByChamp: {
    gragas: {
      ko: ["그라가스 E가 키아나 E를 막을 수 있음. 단, 데미지는 들어옴"],
      en: ["Gragas's E can block Qiyana's E, although the damage is still dealt"],
    },
    qiyana: {
      ko: ["키아나 R로 그라가스 E를 밀어 낼 수 있음. 거리가 가까우면 그라가스 E에 맞고 키아나 R을 시전함"],
      en: ["Qiyana's R can knock back Gragas's E. If the distance is close, Qiyana gets hit by Gragas's E before casting R"],
    },
  },
};
