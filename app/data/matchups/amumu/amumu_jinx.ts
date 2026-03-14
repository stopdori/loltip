// app/data/matchups/amumu/amumu_jinx.ts
import type { MatchupSummary } from "../_types";

export const amumu_jinx: MatchupSummary = {
  champs: ["amumu", "jinx"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 징크스 R(시전 집중)을 끊을 수 없음.", "아무무 Q로 징크스 E(덫)의 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 아무무 Q를 투척한 후 징크스 E(덫)를 밟고 아무무 Q가 적중하면 데미지와 [[ROOT]]는 남아있지만 이동은 가능함.\n단, 활성화된 덫을 아무무 Q로 넘을 수는 없음. 즉시 멈춤."],
      en: ["Amumu's Q and R [[STUN]] cannot interrupt Jinx's R (channeling).", "Amumu's Q is affected by Jinx's E (trap) [[ROOT]], but can still move if the dash phase activates.\nNote: If Amumu has already thrown Q and then steps on Jinx's E (trap), Amumu can still move when Q hits, though damage and [[ROOT]] remain.\nNote: Amumu cannot dash over an activated trap with Q — it stops immediately."],
    },
    jinx: {
      ko: ["징크스 E(덫)를 아무무가 밟으면 아무무가 Q(붕대)를 사용 할 수 없음."],
      en: ["If Amumu steps on Jinx's E (trap), Amumu cannot use Q (Bandage Toss)."],
    },
  },
};
