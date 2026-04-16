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
      ko: ["암베사 R의 [[SUPPRESS]]으로 샤코 R의 [[SKILL_CHANNEL]]을 끊을 수 없음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 샤코 W의 [[FEAR]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[FEAR]]는 남아있음. \n 단, 암베사가 방금 깔린 박스 위에 있다가 박스가 [[INVISIBILITY]]화가 되어, [[TRAP]]이 발동될 때 걸리는 [[FEAR]]만 가능.", "단, 활성화 되어있는 샤코 W를 지나가다 밟아 걸린 FEAR는 무시할 수 없고\n방금 생긴 샤코 W가 사라졌다 활성화 될 타이밍에 쓰는 암베사 R은 무시할 수 있음.\n단, [[FEAR]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] cannot interrupt Shaco's R [[SKILL_CHANNEL]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Shaco's W [[FEAR]]. \n However, [[FEAR]] remains after [[UNSTOPPABLE]] ends. \n However, this only applies to [[FEAR]] triggered when Ambessa is standing on a freshly-placed box as it turns [[INVISIBILITY]] and the [[TRAP]] activates.", "However, [[FEAR]] triggered by stepping on an already-active Shaco W cannot be ignored;\nAmbessa's R used at the timing when a freshly-placed Shaco W disappears and then activates can ignore it.\nHowever, [[FEAR]] still applies."],
    },
    shaco: {
      ko: [],
      en: [],
    },
  },
};
