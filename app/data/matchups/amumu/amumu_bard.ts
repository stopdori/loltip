// app/data/matchups/amumu/amumu_bard.ts
import type { MatchupSummary } from "../_types";

export const amumu_bard: MatchupSummary = {
  champs: ["amumu", "bard"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 바드 E(벽이동)를 끊을 수 없지만 끝까지 따라갈 수 있음.\n단, [[STUN]]은 남아있음.\n단, 바드 E(벽이동)를 따라가는 도중에 바드와 아무무의 몸이 접촉하면 아무무가 이동을 멈춤.", "아무무 R의 [[STUN]]로 바드 E(벽이동)를 끊을 수 있음.\n단, 바드 E(벽이동)가 즉시 끊기고 벽에서 나와짐. 가끔 벽 속에 멈춰있는 것으로 보이는데 그건 내 화면에서만 그럼.", "아무무 Q로 바드 Q의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Bard's E (wall traversal), but can follow him all the way through.\nHowever, [[STUN]] remains active.\nNote: If Bard and Amumu make contact while Amumu is following through the wall, Amumu stops moving.", "Amumu's R [[STUN]] can interrupt Bard's E (wall traversal).\nNote: Bard's E is immediately cancelled and Bard exits the wall. Sometimes it may appear that Bard is stopped inside the wall, but that's only on the local screen.", "Amumu's Q is affected by Bard's Q [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    bard: {
      ko: ["바드 R(존야)로 아무무 Q를 끊을 수 있음.\n단, 아무무 Q의 피해와 [[STUN]]은 남아있음."],
      en: ["Bard's R (Magical Journey stasis) can interrupt Amumu's Q.\nHowever, the damage and [[STUN]] from Amumu's Q remain active."],
    },
  },
};
