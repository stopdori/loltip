import type { ChampData } from "../interactions/types";
 

 
const samira: ChampData = {
 
  id: "samira",
 
  skills: {
 
    P: ["MS_UP", "AIRBORNE"],
 
    Q: ["Q_FLASH"],
 
    W: ["W_FLASH", "WINDSHIELD"],
 
    E: ["E_FLASH", "AS_UP", "WALL_HOP"],
 
    R: ["LIFESTEAL"],
 
  },
 

 
  vision: {
 
    P: [],
 
    Q: [],
 
    W: [],
 
    E: [],
 
    R: [],
 
  },
 

 
  gimmick: {
 
    P: { phases: [
      { label: { ko: "랭크", en: "Rank" }, tags: ["BUFF_INTERACT", "Q", "W", "E"] },
      { label: { ko: "랭크 효과", en: "Rank Buff" }, tags: ["DMG_MAGIC", "BUFF_STACK", "ON_HIT"] },
    ] },
    
    Q: { phases: [
      { label: { ko: "Q 총", en: "Q Shot" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "BUFF_STACK"] },
      { label: { ko: "Q 칼날", en: "Q Blade" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK"] },
    ] },
 
    W: ["BUFF_FORM", "DMG_PHYSICAL", "SKILL_CHANNEL", "AOE", "BUFF_STACK"],
 
    E: ["DMG_MAGIC", "DASH", "BUFF_STACK"],
 
    R: ["ST_CONDITIONAL", "DMG_PHYSICAL", "SKILL_CHANNEL", "PROJECTILE", "AOE", "DOT"],
 
  },
 

 
  notes: {
    skill: {
      note2: {
 
        ko: [
 
        "랭크는 평타와 스킬을 번갈아 맞혀야 쌓임.\n 평타로 시작했다면, 평 > 스 > 평 > 스\n 스킬로 시작했다면, 스 > 평 > 스 > 평", "[[W_FLASH]]은 가능한데,\nW가 즉발스킬이라 최초 데미지는 들어가지 않음.", "사미라 P 돌진효과 사라진거같음. 있으면 제보좀.", "P는 랭크마다 [[MS_UP]]\n[[AIRBORNE]]이 걸린 대상 기본공격 시 대상에게 [[AIRBORNE]]을 다시 검 (적 챔피언마다 쿨타임)\n설명에 최대사거리까지 돌진이라 나와있지만 그런건 없음 그냥 평타사거리", "W는 챔피언별로 아래 박스에 정리", "E는 3초 이내 킬 관여 시 쿨타임 초기화.", "R 쿨타임 5초임\n스택을 잘 쌓으면 자주 사용함\nR은 치명타 적용 가능"
 
      ],
 
        en: ["P grants [[MS_UP]] per rank.\nBasic attacks on an [[AIRBORNE]] target re-apply [[AIRBORNE]] (per-champion cooldown).\nDescription says she dashes to max range — that does not exist; she attacks at standard AA range", "W is detailed per champion in the box below", "R cooldown is 5s.\nBuilding style meter lets you use it frequently.\nR can critically strike"]
 
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },
 

 
  ultCooldown: {
 
    6: 5,
 
    11: 5,
 
    16: 5,
 
  },
 

 
};
 

 
export default samira;
 
