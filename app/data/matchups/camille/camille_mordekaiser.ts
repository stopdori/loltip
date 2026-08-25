// app/data/matchups/camille/camille_mordekaiser.ts
import type { MatchupSummary } from "../_types";

export const camille_mordekaiser: MatchupSummary = {
  champs: ["camille", "mordekaiser"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 모데카이저 E의 [[GRAB]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
      "R의 [[UNTARGETABLE]]로 모데카이저 Q, E, R을 피할 수 있음.", 
    "[[TIP]]R의 [[UNTARGETABLE]], [[UNSTOPPABLE]]로 모데카이저 R을 무시할 수 있음. \n 즉, 죽음의 세계로 가지 않음. \n 모데 R은 [[COOLDOWN]] 소모.", ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Mordekaiser's E [[GRAB]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Mordekaiser's Q, E, and R.",
        "[[TIP]]Camille's R [[UNTARGETABLE]] and [[UNSTOPPABLE]] can ignore Mordekaiser's R. \n In other words, she is not pulled into the Death Realm. \n Mordekaiser's R still consumes its [[COOLDOWN]]."
      ],
    },
    mordekaiser: {
      ko: ["E의 [[GRAB]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Mordekaiser's E [[GRAB]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
  common: {
    ko: ["[[TIP]]카밀 E의 갈고리를 발사했을 때 모데카이저 R로 죽음의 세계로 추방하면 \n 갈고리가 사라지지만 갈고리가 적중한것처럼 E1의 [[DASH]] 발동. \n 하지만, E2의 [[DASH]]은 발동하지 않음. \n 단, E의 [[AS_UP]] [[BUFF]]는 적용. [[CLIP:https://www.youtube.com/shorts/gr5hgRIoRuI]]"],
    en: ["[[TIP]]If Mordekaiser banishes Camille to the Death Realm with R while Camille's E grapple hook is in flight, \n the hook disappears, but the E1 [[DASH]] still triggers as if the hook had connected. \n However, the E2 [[DASH]] does not trigger. \n However, E's [[AS_UP]] [[BUFF]] is still applied. [[CLIP:https://www.youtube.com/shorts/gr5hgRIoRuI]]"],
  },
};
