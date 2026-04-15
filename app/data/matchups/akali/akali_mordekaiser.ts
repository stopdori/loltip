// app/data/matchups/akali/akali_mordekaiser.ts
import type { MatchupSummary } from "../_types";

export const akali_mordekaiser: MatchupSummary = {
  champs: ["akali", "mordekaiser"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["아칼리 E2의 [[HOMING]] [[DASH]]으로 모데카이저를 따라갈 때 모데가 다른 대상과 R로 죽음의 세계로 이동하면 데미지가 들어가지 않고, 모데카이저 구슬이 있는 위치까지 이동."],
      en: ["When Akali's E2 [[HOMING]] [[DASH]] follows Mordekaiser, if Mordekaiser uses R to travel to the Death Realm with another target, no damage is dealt and Akali moves to the location of Mordekaiser's orb."],
    },
    mordekaiser: {
      ko: ["모데카이저 R로 아칼리를 죽음의 세계로 추방할 때, 아칼리의 W(장막)는 협곡에 남아있음. \n 단, 죽음의 세계에서 사용했다면 W(장막)는 남아있음",
        "모데카이저 R로 아칼리를 죽음의 세계로 추방할 때, 아칼리의 E1을 다른 대상에게 맞혔었다면 E2를 사용할 수 없음.",
        "모데카이저 E의 [[GRAB]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음."],
      en: ["When Mordekaiser's R banishes Akali to the Death Realm, Akali's W (Shroud) remains in the Rift. \n However, if used within the Death Realm, the W (Shroud) remains there.",
        "When Mordekaiser's R banishes Akali to the Death Realm, if Akali's E1 had hit another target, E2 cannot be used.",
        "Mordekaiser's E [[GRAB]] can interrupt Akali's E1, E2, R1, and R2 [[DASH]]."],
    },
  },
};
