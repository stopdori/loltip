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
      ko: ["암베사 R의 [[UNSTOPPABLE]]로 세트 E의 [[GRAB]], [[STUN]]을 무시할 수 있음.\n단, 세트 E의 [[STUN]]은 남아있음.", "암베사 R과 세트 R을 서로에게 동시에 사용하면,\n암베사는 세트의 [[SUPPRESS]]을 무시하여 제자리에 머물고,\n세트도 암베사에게 [[SUPPRESS]]되지 않고, 서로 데미지를 입지 않음. (단, 세트 R의 충격파 범위에 암베사가 있다면 충격파 피해와 [[SLOW]] 적용)\n암베사가 조금 일찍 R을 시전하면, 세트가 R을 쓰던 자리 뒤쪽으로 이동하고 판정은 동일.", "암베사 R의 [[SUPPRESS]]으로 세트 W를 끊을 수 있음.\n 세트 W를 보자마자 암베사 R을 사용하면 맞지 않음."],
      en: ["Ambessa's R [[UNSTOPPABLE]] can ignore Sett's E [[GRAB]] and [[STUN]].\nHowever, Sett's E [[STUN]] still applies.", "If Ambessa and Sett use R on each other simultaneously,\nAmbessa ignores Sett's [[SUPPRESS]] and stays in place,\nSett is also not [[SUPPRESS]]ed by Ambessa, and neither takes damage. (However, if Ambessa is within range of Sett's R shockwave, shockwave damage and [[SLOW]] apply.)\nIf Ambessa casts R slightly earlier, she moves to the area behind where Sett used R, with the same results.", "Ambessa's R [[SUPPRESS]] can interrupt Sett's W.\n Using Ambessa's R immediately upon seeing Sett's W means she won't be hit."],
    },
    sett: {
      ko: [],
      en: [],
    },
  },
};
