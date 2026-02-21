// app/data/matchups/gragas/gragas_malzahar.ts
import type { MatchupSummary } from "../_types";

export const gragas_malzahar: MatchupSummary = {
  champs: ["gragas", "malzahar"],
  highlightsByChamp: {
    gragas: {
      ko: ["그라가스 E, R로 말자하 R을 끊을 수 있음"],
      en: ["Gragas's E or R can interrupt Malzahar's R"],
    },
    malzahar: {
      ko: ["말자하 P로 그라가스 E, R을 막을 수 있음", "말자하 R로 그라가스 E를 끊을 수 있음"],
      en: ["Malzahar's P can block Gragas's E or R", "Malzahar's R can interrupt Gragas's E"],
    },
  },
};
