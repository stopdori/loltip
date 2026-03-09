import type { ChampData } from "../interactions/types";

const aphelios: ChampData = {
  id: "aphelios",
  skills: {
    P: ["AD_UP", "AS_UP", "AR_PEN"],
    Q: ["Q_FLASH", "LIFESTEAL", "SHIELD", "ALLY_TP_OK"],
    W: [],
    E: [],
    R: [],
    ETC: [],
  },

  notes: {
    ko: [
    "무기순서 만절중화반 또는 초빨보파흰", "만월총(초록)", "절단검(빨강)은 근접 판정임\nQ[[LIFESTEAL]]이 최대체력이면 [[SHIELD]]으로 생김", "화염포(파랑)은 두명의 적이 일직선으로 있다고 가정, 앞의적을 조준하면 뒤의적이 부채꼴 화염포를 맞을 수 있고, 뒤의 적을 조준하면 투사체가 앞의적을 지나갈때 앞의 챔피언에게도 피해를 줌\n데미지는 메커니즘을 잘 모르겠음 각각 다르게 들어감", "반월검(흰색) Q의 포탑에 [[ALLY_TP_OK]]가능", "R은 범위 피해를 주고 피해를 받은 모든 대상을 주무기로 한번 더 공격함"
  ],
    en: ["Weapon order: Calibrum→Severum→Gravitum→Infernum→Crescendum (or Moonlit→Crimson→Gravitum→Infernum→Flare)", "Calibrum (green)", "Severum (red) is melee range.\nQ [[LIFESTEAL]] generates [[SHIELD]] when at max HP", "Infernum (blue): if two enemies are lined up, aiming at the front one lets the back one get hit by the cone blast; aiming at the back one damages the front one as the projectile passes through.\nDamage mechanics vary per target", "Crescendum (white) Q turret allows [[ALLY_TP_OK]]", "R deals area damage then auto-attacks all hit targets once with the current weapon"]
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
    11: 110,
    16: 100,
  },

};

export default aphelios;
