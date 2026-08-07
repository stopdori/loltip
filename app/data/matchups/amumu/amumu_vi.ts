// app/data/matchups/amumu/amumu_vi.ts
import type { MatchupSummary } from "../_types";

export const amumu_vi: MatchupSummary = {
  champs: ["amumu", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[CC_BUFFER]]로 바이 Q의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n [[STUN]]은 남아있음.",
        "Q의 [[HOMING]] [[DASH]]으로 바이 Q, R의 [[DASH]]을 따라갈 수 있음.",
        "Q의 [[STUN]]로 바이 Q, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "Q, R의 [[STUN]]로 바이 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.",
        "R의 [[STUN]]로 바이 Q의 [[DASH]]을 끊을 수 있음.",
      ],
      en: ["Q [[CC_BUFFER]] can ignore Vi's Q [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies.",
        "Q [[HOMING]] [[DASH]] can follow Vi's Q and R [[DASH]].",
        "Q [[STUN]] cannot interrupt Vi's Q and R [[DASH]]. \n However, the [[STUN]] still applies.",
        "Q and R [[STUN]] can interrupt Vi's Q [[SKILL_CHARGED]].",
        "R [[STUN]] can interrupt Vi's Q [[DASH]].",
      ],
    },

    vi: {
      ko: ["R의 [[UNSTOPPABLE]] [[DASH]]으로 아무무 Q, R의 [[STUN]]을 무시하고 [[DASH]]할 수 있음.",
        "R의 [[UNSTOPPABLE]] [[HOMING]] [[DASH]]으로 아무무 Q의 [[DASH]]을 따라갈 수 있음."],
      en: ["R [[UNSTOPPABLE]] [[DASH]] can ignore Amumu's Q and R [[STUN]] and continue [[DASH]].",
        "R [[UNSTOPPABLE]] [[HOMING]] [[DASH]] can follow Amumu's Q [[DASH]]."],
    },
  },

  common: {
    ko: ["아무무 Q와 바이 R의 판정 \n \n 1. 서로 에게 사용할 때. \n 아무무는 데미지를 받고 [[AIRBORNE]]에 걸림. \n 바이는 데미지를 받고 [[STUN]]에 걸림. \n \n 2. 아무무 Q를 제3자에게, 바이 R을 아무무에게 사용할 때 \n 2-1. 아무무 Q(준비단계) 도중에 바이 R로 부딪힐 때 [[CC_BUFFER]]로 아무무가 피해를 입지만 다른 대상에게 [[DASH]]. 바이는 아무무가 있던 자리에 착지. \n 2-2. 아무무 Q(돌진단계) 도중에 바이 R로 부딪힐 때 아무무가 그 자리에 즉시 정지하고 바이 R 100% 유효. \n 2-3. 아무무 Q(돌진단계) 도중에 바이 R이 부딪히지 않을 때, 아무무를 끝까지 따라가서 바이 R 100% 유효."
    ],
    en: ["Amumu's Q vs Vi's R \n \n 1. When they target each other: \n Amumu takes damage and is inflicted with [[AIRBORNE]]. \n Vi takes damage and is inflicted with [[STUN]]. \n \n 2. When Amumu casts Q on a third party and Vi casts R on Amumu: \n 2-1. If Vi's R collides during Amumu's Q (charge phase), [[CC_BUFFER]] allows Amumu to take damage but still [[DASH]] to the other target. Vi lands where Amumu was. \n 2-2. If Vi's R collides during Amumu's Q (dash phase), Amumu immediately stops and Vi's R applies 100%. \n 2-3. If Vi's R does not collide during Amumu's Q (dash phase), Vi follows Amumu all the way and Vi's R applies 100%."
    ],
  },
};
