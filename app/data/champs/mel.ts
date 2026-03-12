import type { ChampData } from "../interactions/types";

const mel: ChampData = {
  id: "mel",
  skills: {
    P: ["EXECUTE"],
    Q: ["Q_FLASH"],
    W: ["REFLECT", "INVULNERABLE", "MS_UP",],
    E: ["E_FLASH", "ROOT", "SLOW"],
    R: ["PSEUDO_UNSTOPPABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "P는 스택이 2종류.", "1. 멜에게 쌓이는 스택\n멜에게 쌓이는 스택은 스킬을 사용하면 3개씩 쌓임. 9스택까지 쌓을 수 있음\n평타를 치면 스택을 모두 소모하여 추가 투사체를 날림 (최대 10개 투사체)", "2. 상대에게 쌓이는 스택 (압도)\n평타 투사체 1개당 압도1.\nQ 투사체당 압도1 (최대8) \nE에 닿는 시간 동안 압도1\n멀어 질 수록 원 크기 증가.(최소4 최대 11까지 관측)", "멜 압도가 상대에게 충분히 쌓였을때 체력바가 빨갛게 변하는데, 이때 멜이 평타 또는 스킬을 사용하면 처형\n단, 아이템효과(리안드리, 벨트, 구원 등등)로 [[EXECUTE]] 불가.", "W는 챔피언별로 아래 박스에 정리\n하단 박스를 참고", "E [[ROOT]]은 중심부만 걸림", "P(압도)가 충분히 쌓이면 R로 처형이 가능 해지는데, 구분하는 방법은\n하단 R의 아이콘이 황금색 테두리가 생기는지 확인", "R 시전 중에 멜이 죽으면, 쿨타임이 생기지 않음"
  ],
    en: ["P has 2 types of stacks.", "1. Stacks on Mel\nUsing a skill builds 3 stacks, up to 9 max.\nBasic attack consumes all stacks and fires additional projectiles (up to 10 projectiles)", "2. Stacks on enemies (Dominance)\n1 Dominance per basic attack projectile.\n1 Dominance per Q projectile (max 8)\n1 Dominance per tick while touching E.\nCircle grows larger with distance (min 4, max 11 observed)", "When Mel's Dominance stacks are sufficiently built on a target, their health bar turns red — Mel's basic attack or skill use then executes them.\nNote: Item effects (Liandry's, Shadowflame, Redemption, etc.) cannot trigger [[EXECUTE]].", "W is detailed per champion in the box below", "E [[ROOT]] only applies to the center of the ability", "When P (Dominance) stacks are sufficient, R can execute — check if the R icon gains a golden border.", "If Mel dies while casting R, no cooldown is applied"]
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

export default mel;
