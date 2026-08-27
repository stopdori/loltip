// app/data/matchups/cassiopeia/cassiopeia_ziggs.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_ziggs: MatchupSummary = {
  champs: ["cassiopeia", "ziggs"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 직스 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Ziggs's W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    ziggs: {
      ko: ["W는 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 있음. \n 단, W의 [[DASH]] 효과가 직스에게 발동하지 않음. [[CLIP:https://www.youtube.com/shorts/R10e0pXJHXQ]]"],
      en: ["W can still be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, W's [[DASH]] effect does not trigger on Ziggs. [[CLIP:https://www.youtube.com/shorts/R10e0pXJHXQ]]"],
    },
  },
};
