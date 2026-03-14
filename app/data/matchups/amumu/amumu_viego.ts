// app/data/matchups/amumu/amumu_viego.ts
import type { MatchupSummary } from "../_types";

export const amumu_viego: MatchupSummary = {
  champs: ["amumu", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 비에고 W(돌진 단계), R을 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 비에고 W(돌진 단계)를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 비에고 W(시전 집중)을 끊을 수 있음.", "아무무 Q로 비에고 W의 [[STUN]], R의 [[KNOCKBACK]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 W의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Viego's W (dash phase) or R, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Viego's W (dash phase).", "Amumu's Q and R [[STUN]] can interrupt Viego's W (channeling).", "Amumu's Q is affected by Viego's W [[STUN]] and R [[KNOCKBACK]], but can still move if the dash phase activates.\nHowever, damage is applied and W's [[STUN]] remains active."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
