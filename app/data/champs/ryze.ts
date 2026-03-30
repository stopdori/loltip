import type { ChampData } from "../interactions/types";
 

 
const ryze: ChampData = {
 
  id: "ryze",
 
  skills: {
 
    P: [],
 
    Q: ["MS_UP"],
 
    W: ["W_FLASH", "SLOW", "ROOT"],
 
    E: ["E_FLASH"],
 
    R: ["WALL_HOP", "TOWER_DODGE"],
 
  },
 

 
  vision: {
 
    P: [],
 
    Q: ["FEEDBACK_SOUND", "FEEDBACK_EFFECT"],
 
    W: ["POSITION_REVEAL"],
 
    E: ["POSITION_REVEAL", "FEEDBACK_EFFECT"],
 
    R: ["VISION"],
 
  },
 

 
  gimmick: {
 
    P: ["PASSIVE_BONUS"],
 
    Q: ["DMG_MAGIC", "PROJECTILE", "STACK_CONSUME"],
 
    W: ["DMG_MAGIC", "TARGETED", "NON_PROJECTILE", "BUFF_STACK"],
 
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "BUFF_STACK"] },
      { label: { ko: "E 디버프 연쇄", en: "E Debuff Chained" }, tags: ["PROJECTILE", "CHAIN", "DEBUFF_STACK"] },
    ] },
     
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["SKILL_CHANNEL", "ZONE", "MOBILITY"] },
      { label: { ko: "R 순간이동", en: "R Blink" }, tags: ["ZONE", "BLINK"] },
    ] },
    
 
  },
 

 
  notes: {
 
    ko: [
 
    "[[Q_FLASH]] 안됨", "P는 주문력의 10%만큼 최대마나 증가", "룬과 주문전이는 다름\n룬은 W, E 스킬 사용시 충전되는 스택\n주문전이는 E스킬이 상대에게 닿으면 생김", "W, E스킬 모두 Q스킬을 초기화 시킴\n룬이 2개일 때, Q를 주문전이 대상에 맞히면 룬을 소모하여 [[MS_UP]]", "W는 그냥쓰면 [[SLOW]]\n주문전이 대상에게 쓰면 [[ROOT]]", "주문전이 묻히고 [[W_FLASH]] 개사기임", "R은 시전중에 라이즈가 CC 맞으면 풀림\n아군은 CC맞아도 이동 가능\nR에서 귀환 누르면 나만 안타짐(라이즈포함)\nR로 사라지면서 이동할 때 [[INVULNERABLE]] 판정임\n타워 데미지 포함 온갖기술 다 피함\n아군 미니언과 함께 상대포탑에 이동할 때 어그로는 미니언, 소환수에게 먼저 끌림"
 
  ],
 
    en: ["[[Q_FLASH]] not possible", "P increases max mana by 10% of AP", "Rune and Spellflux are distinct.\nRunes are stacks charged by W and E.\nSpellflux is applied when E hits an enemy", "Both W and E reset Q's cooldown.\nAt 2 runes, Q on a Spellflux target consumes runes to grant [[MS_UP]]", "W applies [[SLOW]] normally.\nW on a Spellflux target applies [[ROOT]]", "[[W_FLASH]] on a Spellflux target is extremely strong", "R cancels if Ryze is CC'd mid-channel.\nAllies can still travel even if CC'd.\nPressing recall during R excludes only the user from the portal.\nAllies become [[INVULNERABLE]] while teleporting, blocking all damage including tower shots.\nWhen teleporting with minions near an enemy tower, aggro is drawn to minions and pets first"]
 
  },
 

 
  ultCooldown: {
 
    6: 180,
 
    11: 160,
 
    16: 140,
 
  },
 

 
};
 

 
export default ryze;
 
