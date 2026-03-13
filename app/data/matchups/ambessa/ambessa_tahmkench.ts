// app/data/matchups/ambessa/ambessa_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const ambessa_tahmkench: MatchupSummary = {
  champs: ["ambessa", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 탐켄치 W(시전 집중)를 끊을 수 있음", "암베사 R의 [[UNSTOPPABLE]]로 탐켄치 Q의 [[STUN]], W의 [[AIRBORNE]]을 무시할 수 있음.\n단, 탐켄치 Q의 [[STUN]]은 남아있음.", "암베사 R의 [[UNSTOPPABLE]]로 탐켄치 R(3스택 삼키기)을 무시할 수 있음.\n단, 암베사가 R을 미리 시전한 타이밍에 탐켄치가 R을 사용해야 무시. 탐켄치가 R이나 QR을 먼저 시전하면 절대 불가능."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Tahm Kench's W (channeling).", "Ambessa's R [[UNSTOPPABLE]] can ignore Tahm Kench's Q [[STUN]] and W [[AIRBORNE]].\nHowever, Tahm Kench's Q [[STUN]] still applies.", "Ambessa's R [[UNSTOPPABLE]] can ignore Tahm Kench's R (3-stack devour).\nHowever, this only works if Tahm Kench uses R at the timing when Ambessa has already cast R. If Tahm Kench casts R or QR first, it is absolutely impossible."],
    },
    tahmkench: {
      ko: ["암베사 R의 [[SUPPRESS]]당한 아군에게 탐켄치 R을 사용하면, 먹어짐"],
      en: ["Using Tahm Kench's R on an ally who is [[SUPPRESS]]ed by Ambessa's R will devour them."],
    },
  },
};
