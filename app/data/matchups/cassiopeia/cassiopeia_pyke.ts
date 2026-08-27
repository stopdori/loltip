// app/data/matchups/cassiopeia/cassiopeia_pyke.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_pyke: MatchupSummary = {
  champs: ["cassiopeia", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 파이크 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.",
        "R의 [[STUN]]로 파이크 E의 [[DASH]], R의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] can interrupt Pyke's Q [[SKILL_CHARGED]].",
        "R [[STUN]] cannot interrupt Pyke's E [[DASH]] or R [[BLINK]]. \n However, the [[STUN]] still applies."],
    },
    pyke: {
      ko: ["E는 [[DASH]], R은 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["E [[DASH]] / R [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
