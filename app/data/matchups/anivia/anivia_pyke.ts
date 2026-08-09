// app/data/matchups/anivia/anivia_pyke.ts
import type { MatchupSummary } from "../_types";

export const anivia_pyke: MatchupSummary = {
  champs: ["anivia", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 파이크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 파이크 E의 [[DASH]]을 끊을 수 있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 파이크 R의 범위있는 아군에게 사용하여 밀어내 살려줄 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Pyke's E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Pyke's E [[DASH]].", "W [[TERRAIN]] [[AIRBORNE]] can knock away an ally in Pyke's R range, saving them."],
    },
    pyke: {
      ko: ["파이크 R로 애니비아를 [[EXECUTE]] 했을 때, 애니비아가 P(알)로 변한다면,\n파이크 R의 [[EXECUTE]]이 발동하지 않아 현상금도 없고 추가 사용도 불가능."],
      en: ["If Pyke's R [[EXECUTE]]s Anivia and she transforms into P (Egg),\nthe [[EXECUTE]] does not trigger — no bounty and no reset."],
    },
  },
};
