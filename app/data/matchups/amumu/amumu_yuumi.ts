// app/data/matchups/amumu/amumu_yuumi.ts
import type { MatchupSummary } from "../_types";

export const amumu_yuumi: MatchupSummary = {
  champs: ["amumu", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q, R의 [[STUN]]로 유미 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Q and R [[STUN]] can interrupt Yuumi's W [[DASH]]."],
    },
    yuumi: {
      ko: ["유미 W는 아무무 Q, R의 [[STUN]]을 맞으면 W가 쿨타임이 될 수 있음."],
      en: ["Yuumi's W can be put on [[COOLDOWN]] if hit by Amumu's Q or R [[STUN]]."],
    },
  },
};
