// app/data/matchups/amumu/amumu_shaco.ts
import type { MatchupSummary } from "../_types";

export const amumu_shaco: MatchupSummary = {
  champs: ["amumu", "shaco"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 샤코 R(샤코가 분신과 멀어지면 분신이 샤코 옆으로 순간이동 하는것)을 따라갈 수 있음.\n단, [[STUN]]은 R(분신)에게 남아있음."],
      en: ["Amumu's Q [[STUN]] can follow Shaco's R (when Shaco moves away from his clone, the clone teleports next to Shaco).\nHowever, [[STUN]] remains on R (clone)."],
    },
    shaco: {
      ko: [],
      en: [],
    },
  },
};
