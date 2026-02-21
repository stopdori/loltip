import type { ChampData } from "../interactions/types";

const anivia: ChampData = {
  id: "anivia",
  skills: {
    P: ["REVIVE"],
    Q: ["SLOW", "STUN"],
    W: ["W_FLASH", "WALL", "AIRBORNE"],
    E: ["E_FLASH"],
    R: ["R_FLASH", "SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]] 안됨", "P(알) 쿨타임은 240s\n알에 텔 안타짐\n[[GW]] 묻고 알로변해도 풀피됨", "Q는 경로에 서 있으면 냉각으로 인해 [[SLOW]]\n재사용 하면 폭발하여 [[STUN]]", "E는 설명이 조금 잘못 나와있음\n설명에는 냉각에 걸린 대상에게 2배 데미지 라고 적혀있지만\nE의 2배 데미지는 사실 얼음땡 효과가 걸린 대상에게 발동함\nQ와 R은 냉각을 즉시 걸지만 얼음땡 효과는 Q에는 즉시, R에는 장판이 다 펴지고 나서 걸기시작함", "그래서 가끔 RE로 2배 데미지가 안 터질 때 버그라고 생각할 수 있음\n사실은 R이 충분히 펴지지 않아 얼음땡효과가 발동하기 전에 E에 맞아서 그런거임\n그래서 R을 쓰고 잠깐 기다렸다 E를 날려야 기대하는 데미지가 나옴"
  ],
    en: []
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },

  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

};

export default anivia;
