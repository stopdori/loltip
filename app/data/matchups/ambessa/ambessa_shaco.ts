// app/data/matchups/ambessa/ambessa_shaco.ts
import type { MatchupSummary } from "../_types";

export const ambessa_shaco: MatchupSummary = {
  champs: ["ambessa", "shaco"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 샤코 R(시전 집중)을 끊을 수 없음.", "암베사 R의 [[UNSTOPPABLE]]로 샤코 W의 [[FEAR]]을 무시할 수 있음.\n단, 활성화 되어있는 샤코 W를 지나가다 밟아 걸린 FEAR는 무시할 수 없고\n방금 생긴 샤코 W가 사라졌다 활성화 될 타이밍에 쓰는 암베사 R은 무시할 수 있음.\n단, [[FEAR]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] cannot interrupt Shaco's R (channeling).", "Ambessa's R [[UNSTOPPABLE]] can ignore Shaco's W [[FEAR]].\nHowever, [[FEAR]] triggered by stepping on an already-active Shaco W cannot be ignored;\nAmbessa's R used at the timing when a freshly-placed Shaco W disappears and then activates can ignore it.\nHowever, [[FEAR]] still applies."],
    },
    shaco: {
      ko: [],
      en: [],
    },
  },
};
