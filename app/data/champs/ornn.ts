import type { ChampData } from "../interactions/types";

const ornn: ChampData = {
  id: "ornn",
  skills: {
    P: [],
    Q: ["SLOW", "WALL"],
    W: ["UNSTOPPABLE"],
    E: ["AIRBORNE"],
    R: ["SLOW", "AIRBORNE"],
    ETC: [],
  },

  notes: {
    ko: [
    "P로 아이템 강화는 13레벨에 1번 슬롯부터 강화함\n오른 걸작들은 1000골드 가치만큼 강화 https://leagueoflegends.fandom.com/wiki/Legendary_item", "[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]], [[R_FLASH]] 다 안됨", "오른 Q(기둥)에 텔 안타짐", "W를 마지막에 맞히면 상대가 불안정 상태가 되는데, 이때 공격하면 CC 지속시간 증가와 넉백이 있음", "E는 벽에 부딪혀야 [[AIRBORNE]]이 발동함\n상대팀이 만든 벽이라면 파괴함", "R은 오는거 가는거 다 불안정상태를 부여함\nR2타는 [[UNSTOPPABLE]]가 아님"
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
    6: 140,
    11: 120,
    16: 100,
  },

};

export default ornn;
