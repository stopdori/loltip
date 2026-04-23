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
      ko: ["아무무 Q의 [[STUN]]로 바드 E(터널)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 끝까지 따라갈 수 있음. \n 단, 바드 E(터널)를 따라가는 도중에 바드와 아무무의 몸이 닿으면 아무무가 [[DASH]]을 멈춤.", 
        "아무무 R의 [[STUN]]로 바드 E(터널)의 [[DASH]]을 끊을 수 있음. \n 단, 바드 E(터널)에서 즉시 가까운 땅으로 나옴. \n 가끔 벽 속에 멈춰있는 것으로 보이는데 그건 내 화면에서만 그럼. 실제론 나온것.", 
        "아무무 Q의 [[CC_BUFFER]]로 바드 Q의 [[STUN]]을 무시할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Bard's E (tunnel) [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow all the way through. \n However, if Bard and Amumu make contact while following through the tunnel, Amumu stops [[DASH]].", "Amumu's R [[STUN]] can interrupt Bard's E (tunnel) [[DASH]]. \n However, [Bard] immediately exits to the nearest ground. \n Note: Sometimes it may appear that Bard is stopped inside the wall, but that's only on the local screen. In reality, Bard has exited.", "Amumu's Q [[CC_BUFFER]] can ignore Bard's Q [[STUN]]. \n However, the [[STUN]] still applies."],
    },
    bard: {
      ko: ["바드 Q의 [[STUN]]로 아무무 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 아무무 Q의 [[DASH]]을 끊을 수 있음."],
      en: [],
    },
  },
};
