import type { ChampData } from "../interactions/types";

const camille: ChampData = {
  id: "camille",
  skills: {
    P: ["SHIELD"],
    Q: ["MS_UP", "AA_RESET"],
    W: ["W_FLASH", "HEAL", "SLOW"],
    E: ["AS_UP", "STUN", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE", "PSEUDO_UNSTOPPABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "P는 카밀이 입는 피해의 유형이 물리/마법 피해중 높은쪽의 쉴드를 받음\n예)카밀 방어력/마법저항력이 30/50 일때\n상대스킬로 100/100 물리/마법 피해가 들어온다면\n결과적으로 물리데미지가 더 많이 들어와서 >>>> 물리쉴드", "W는 바깥쪽에 맞혀야지만 [[HEAL]]과 [[SLOW]] 효과 발동", "E스킬은 네단계로 나뉨 투척/그렙/대기/돌진\n투척단계에 카밀이 맞은 CC는 유효하지만\n그렙단계가 발동되어 벽으로 이동하는것\n그렙/대기/돌진 단계에는 CC저항력 없음" ,"E는 웬만한 생성된 벽에도 다됨\n[[AS_UP]]과 [[STUN]]은 상대에게 부딪혀야지만 발동", "R은 시전 한 대상을 범위에 가두고, 범위가 펼쳐질 때 근처에 있던 적 챔피언은 범위 밖으로 [[KNOCKBACK]]"
  ],
    en: ["P: the shield type reflects the higher proportion of incoming physical/magic damage received.\nExample: if Camille has 30 armor / 50 MR and takes 100 physical / 100 magic damage,\nmore physical damage goes through, so she gets a physical shield", "W applies [[HEAL]] and [[SLOW]] only when hitting with the outer ring", "E has four phases: lunge / grapple / wait / dash.\nCC hit during the lunge phase is valid, but the grapple is still triggered and Camille moves toward the wall.\nThere is no CC immunity during the grapple / wait / dash phases", "E works on most terrain walls.\n[[AS_UP]] and [[STUN]] only trigger on collision with an enemy", "R traps the target inside an arena, and nearby enemy champions are [[KNOCKBACK]]ed out when the arena expands"]
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
    6: 140,
    11: 115,
    16: 90,
  },

};

export default camille;
