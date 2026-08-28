// app/data/matchups/anivia/anivia_darius.ts
import type { MatchupSummary } from "../_types";

export const anivia_darius: MatchupSummary = {
  champs: ["anivia", "darius"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["W([[TERRAIN]])의 [[AIRBORNE]]으로 다리우스 Q를 시전 중일 때 뒤로 밀어내면 Q의 [[AOE]]도 같이 뒤로 밀림."],
      en: ["If W [[TERRAIN]] [[AIRBORNE]] knocks Darius back while casting Q, the Q [[AOE]] also moves with him."],
    },
    darius: {
      ko: ["E의 [[GRAB]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["E [[GRAB]] can interrupt Anivia's R [[SKILL_CHANNEL]]."],
    },
  },
};
