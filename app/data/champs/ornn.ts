import type { ChampData } from "../interactions/types";

const ornn: ChampData = {
  id: "ornn",
  skills: {
    P: [],
    Q: ["SLOW", "TERRAIN", "AIRBORNE"],
    W: ["UNSTOPPABLE"],
    E: ["AIRBORNE"],
    R: ["R_FLASH", "SLOW", "AIRBORNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "TERRAIN"] },
      { label: { ko: "Q 기둥", en: "Q Terrain" }, tags: ["ZONE"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["SKILL_CHANNEL", "DOT", "MARK", "MOBILITY", "UNSTOPPABLE"] },
      { label: { ko: "마지막 불꽃", en: "" }, tags: ["MARK", "UNSTOPPABLE"] },
      { label: { ko: "표식 (불안정 상태)", en: "MARK (Brittle)" }, tags: ["ST_CONDITIONAL", "ON_HIT"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E 돌진", en: "E Dash" }, tags: ["DMG_PHYSICAL", "SKILL_CHANNEL", "AOE", "DASH", "TIMING_AFTERCAST"] },
      { label: { ko: "E AOE", en: "E AOE" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "AOE"] },
    ] },

    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "MARK"] },
      { label: { ko: "R2", en: "R2" }, tags: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "MARK"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P의 효과로 집에가지 않고 \n 골드를 소모하여 아이템을 만들어 씀.", "P의 효과로 아이템강화 \n 13레벨에 오른 꺼 1번, 14부터 아군 꺼 1번씩. \n 아이템 창 1번에 가까운 템 강화.", "오른 걸작들은 1000골드 가치만큼 강화 https://wiki.leagueoflegends.com/en-us/Legendary_item", "[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]], 안됨", "[[R_FLASH]]는 R2 타이밍에 정말 빠르게 R2플 하면 가능", "오른 Q(기둥)에 텔 안타짐", "W를 마지막에 맞히면 상대가 불안정 상태가 되는데, 이때 공격하면 CC 지속시간 증가와 넉백이 있음", "E는 벽에 부딪혀야 [[AIRBORNE]]이 발동함\n상대팀이 만든 벽이라면 파괴함", "R은 오는거 가는거 다 불안정상태를 부여함\nR2타는 [[UNSTOPPABLE]]가 아님"
      ],
        en: ["P item upgrades begin at level 13, one slot at a time.\nOrnn's Masterwork items are worth 1000g of value", "[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]] not possible", "[[R_FLASH]] is possible if done very quickly at R2 timing", "Cannot TP onto Q (pillar)", "Hitting the last part of W makes the target Brittle, which makes the next attack apply bonus CC duration and knockback", "E's [[AIRBORNE]] only triggers on collision with a wall.\nIf the wall belongs to the enemy team, it is destroyed instead", "Both charges of R apply Brittle.\nR's second strike is not [[UNSTOPPABLE]]"]
        },
    },
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default ornn;
