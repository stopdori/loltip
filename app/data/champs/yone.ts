import type { ChampData } from "../interactions/types";

const yone: ChampData = {
  id: "yone",
  skills: {
    P: ["AD_UP"],
    Q: ["Q_FLASH", "AIRBORNE", "WALL_HOP"],
    W: ["W_FLASH", "SHIELD", "UNINTERRUPTIBLE_CAST"],
    E: ["E_FLASH", "MS_UP", "WALL_HOP"],
    R: ["AIRBORNE", "WALL_HOP", "UNINTERRUPTIBLE_CAST"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[R_FLASH]] 안됨", "P의 [[AD_UP]]는 치명타 초과분이 변환", "Q1, Q2는 사용하고 정말 짧은 타이밍에 CC에 맞으면 적중하지 않을 때가 있음. 버그인지 아닌지 모르곘음.", "Q [[AIRBORNE]]은 Q3타에 발동", "W에 보호막은 적중한 적 챔피언 수에 따라 증가", "E의 는 돌아올때만 ", "E 발동 시에는 벽 못넘음\n돌아오는 E는 벽 넘음", "R을 시전할때 [[GRAB]], [[KNOCKBACK]]류에 영향을 받아서 궤적이 틀어질 수 있음."
  ],
    en: ["[[R_FLASH]] not possible", "P [[AD_UP]] converts excess crit chance", "Q [[AIRBORNE]] triggers on the 3rd cast", "W shield scales with the number of enemy champions hit", "E [[UNINTERRUPTIBLE_CAST]] only applies on the return", "E cannot wall-hop on cast.\nThe returning E can wall-hop"]
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
    6: 120,
    11: 100,
    16: 80,
  },

};

export default yone;
