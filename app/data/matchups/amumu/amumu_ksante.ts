// app/data/matchups/amumu/amumu_ksante.ts
import type { MatchupSummary } from "../_types";

export const amumu_ksante: MatchupSummary = {
  champs: ["amumu", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 크산테 일반폼 W, E, R/ 변신폼 W, E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.\n단, 크산테 R의 경우 벽넘어까지 따라감.", "아무무 R의 [[STUN]]로 크산테 E(일반, 변신폼)를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 크산테 W(시전 집중)을 끊을 수 없음.", "아무무 Q로 크산테 Q3의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효.", "아무무 Q로 크산테 R의 [[SUPPRESS]]을 무시할 수 없음.\n일단 긴벽을 통과할때는 불가능 했는데, 짧은거리는 가능할지도? 제보 부탁드림."],
      en: ["Amumu's Q [[STUN]] cannot interrupt K'Sante's base W, E, R / transformed W, E, but can follow him.\nHowever, [[STUN]] remains active.\nNote: For K'Sante's R, Amumu follows through the wall.", "Amumu's R [[STUN]] can interrupt K'Sante's E (base and transformed forms).", "Amumu's Q and R [[STUN]] cannot interrupt K'Sante's W (channeling).", "Amumu's Q is affected by K'Sante's Q3 [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied.", "Amumu's Q cannot ignore K'Sante's R [[SUPPRESS]].\nConfirmed that it doesn't work through a long wall — whether it works over a short distance is unverified. Please report if you know."],
    },
    ksante: {
      ko: [],
      en: [],
    },
  },
};
