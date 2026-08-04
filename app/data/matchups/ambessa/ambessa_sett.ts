// app/data/matchups/ambessa/ambessa_sett.ts
import type { MatchupSummary } from "../_types";

export const ambessa_sett: MatchupSummary = {
  champs: ["ambessa", "sett"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[UNSTOPPABLE]]로 세트 E의 [[GRAB]], [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음.",
        "R의 [[SUPPRESS]]으로 세트 W를 끊을 수 없음. \n 단, 세트 W를 보자마자 암베사 R을 사용하면 세트 뒤쪽으로 [[BLINK]]하여 맞지 않음. \n \n", 

        "암베사와 세트 R의 [[UNSTOPPABLE]] 판정. \n 암베사와 세트가 서로에게 사용했을 때 \n \n 1. 완전 동시에 사용할 때, \n 세트는 암베사를 [[SUPPRESS]]한 것처럼 메다꽂음. 스킬 유효. \n 이때 암베사는 제자리에 머물고 스킬 무효. \n \n 2. 암베사가 약간먼저 사용 했을 때, \n 세트가 암베사를 [[SUPPRESS]]한 것처럼 메다꽂음. 스킬 유효. \n 이때 암베사는 세트의 등 쪽으로 이동하는데 세트가 공중에서 회전을 하기 때문에 암베사기준 뒤쪽 또는 뒤쪽좌우로 [[BLINK]]. \n \n 3. 암베사가 훨씬 먼저 사용하고 거의 발동할 때쯤 세트가 사용했을 때 \n 세트가 판정을 완전히 이김. 세트가 암베사를 [[SUPPRESS]]해서 메다꽂음.",

      ],
      en: ["R [[UNSTOPPABLE]] can ignore Sett's E [[GRAB]] and [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends.", "R [[SUPPRESS]] cannot interrupt Sett's W. \n However, using Ambessa's R immediately upon seeing Sett's W will [[BLINK]] behind Sett, avoiding the hit. \n \n", "Ambessa and Sett R [[UNSTOPPABLE]] interaction. \n When Ambessa and Sett use R on each other: \n \n 1. When used at exactly the same time: \n Sett slams down as if [[SUPPRESS]]ing Ambessa. Sett's skill is valid. \n Ambessa stays in place and her skill is invalid. \n \n 2. When Ambessa uses R slightly earlier: \n Sett slams down as if [[SUPPRESS]]ing Ambessa. Sett's skill is valid. \n Ambessa moves toward Sett's back — since Sett rotates in the air, Ambessa [[BLINK]]s to Sett's rear or rear-left/right. \n \n 3. When Ambessa uses R much earlier and Sett uses R just as it activates: \n Sett wins the interaction completely. Sett [[SUPPRESS]]es and slams down Ambessa."],
    },
    sett: {
      ko: [],
      en: [],
    },
  },
};
