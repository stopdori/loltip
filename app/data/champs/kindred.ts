import type { ChampData } from "../interactions/types";

const kindred: ChampData = {
  id: "kindred",
  skills: {
    P: [],
    Q: ["AS_UP", "WALL_HOP", "AA_RESET"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SLOW"],
    R: ["HEAL", "INVULNERABLE"],
  },

  vision: {
    P: [],
    Q: [],
    W: ["VISION"],
    E: ["POSITION_REVEAL"],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "STACKING"],
    Q: { phases: [
      { label: { ko: "도약단계", en: "Dash" }, tags: ["DASH"] },
      { label: { ko: "발사단계", en: "Shot" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "VOLLEY"] },
    ] },

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "BUFF_STACK"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["DMG_MAGIC", "ZONE", "DOT"] },
    ] },

    E: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "PROJECTILE", "MARK", "DEBUFF_STACK"],

    R: ["TIMING_CAST", "ZONE"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[R_FLASH]] 안됨.", "표식당 Q의 [[AS_UP]] 5% 증가.\nW, E 데미지증가.\n4표식에 사거리 75증가.\n그 이후 3스택당 사거리 75증가.", "정글표식은 랜덤으로 뜨는듯?\n(순서 아시면 제보좀)", "Q는 두단계로 나뉨. 도약/발사\n도약단계 중에 [[AIRBORNE]]류, [[FEAR]], [[SUPPRESS]], [[SLEEP]]을 맞으면 발사 단계를 하지 않음.", "W 위에서 Q를 사용하면 쿨타임이 빨리 돔.\nQ를 미리쓰고 W를 써도 쿨타임이 줄어듬.", "Q, W는 상대가 보여야 공격이 닿음.\nW로 부쉬안을 보고 싶으면 부쉬안에 W를 써야함.", "R은 체력 10% 밑으로 [[INVULNERABLE]]."
      ],
        en: ["R flash not possible", "Each mark increases Q [[AS_UP]] by 5%, W and E damage, and range by 75 every 4 marks", "Jungle marks appear to be random", "R grants [[INVULNERABLE]] below 10% HP"]
        },
    },
  },

  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

};

export default kindred;
