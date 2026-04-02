import type { ChampData } from "../interactions/types";

const aphelios: ChampData = {
  id: "aphelios",
  skills: {
    P: ["AD_UP", "AS_UP", "AR_PEN"],
    Q: ["Q_FLASH", "LIFESTEAL", "SHIELD", "ALLY_TP_OK"],
    W: [],
    E: [],
    R: [],
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
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "무기순서 만절중화반 또는 초빨보파흰", "솔직히 경우의 수가 너무 많은 캐릭터. 정확하게 알기 위해서는 위키 같은 디테일한 사이트를 읽어야 함.", "간단 왜곡설명\n주무기가 있고 보조무기가 있음.\n주무기 효과에 보조무기 효과가 묻어서 발동되는 느낌.\n만월(초록) - [[RANGE_UP]] 증가, 추가 평타.\n절단(빨강) - [[LIFESTEAL]], [[MS_UP]].\n중력(보라) - [[SLOW]], [[ROOT]]\n화염(파랑) - 범위 공격, 데미지 추가\n반월(흰색) - 칼날 스택당 피해 증가. 최대 20스택. 공격 대상과 가까울 수록 [[AS_UP]]", "만월총(초록) - Q, R를 적중시키면 대상에게 표식이 생기고, 사거리 내에서 평타를 한번 더 공격할 수 있음. R의 경우 표식이 여러개 생기지만 하나만 공격 가능하고 나머지 대상은 자동으로 보조무기 공격.\n보조무기가 중력(보라) 일때 W를 눌러 중력포로 바꾸고 Q사용 가능.", "절단검(빨강)은 근접 판정임\nQ[[LIFESTEAL]]이 최대체력이면 [[SHIELD]]으로 생김", "화염포(파랑)은 두명의 적이 일직선으로 있다고 가정, 앞의적을 평타로 공격하면 뒤의적이 부채꼴 화염포를 맞을 수 있고, 뒤의 적을 공격하면 투사체가 앞의적을 지나갈때 앞의 챔피언에게도 피해를 줌\n데미지는 메커니즘을 잘 모르겠음 각각 다르게 들어감", "반월검(흰색) Q의 포탑에 [[ALLY_TP_OK]]가능", "R은 범위 피해를 주고 피해를 받은 모든 대상을 주무기로 한번 더 공격함", "아 몰라 안해"
      ],
        en: ["Weapon order: Calibrum→Severum→Gravitum→Infernum→Crescendum (or Moonlit→Crimson→Gravitum→Infernum→Flare)", "Honestly too many cases to cover. For accurate details, refer to the wiki or similar resources.", "Simplified overview:\nThere's a main weapon and an off-hand weapon. The off-hand effect piggybacks onto the main weapon's actions.\nCalibrum (green) — [[RANGE_UP]], bonus auto.\nSeverum (red) — [[LIFESTEAL]], [[MS_UP]].\nGravitum (purple) — [[SLOW]], [[ROOT]].\nInfernum (blue) — area attacks, bonus damage.\nCrescendum (white) — damage increases per blade stack (max 20). The closer to the target, the higher [[AS_UP]].", "Calibrum (green) — Q and R hits mark the target, allowing one bonus auto within range. R can mark multiple targets but only one can be bonus-auto'd; the rest are auto-attacked with the off-hand weapon.\nIf off-hand is Gravitum (purple), press W to swap and use Q.", "Severum (red) is melee range.\nQ [[LIFESTEAL]] generates [[SHIELD]] when at max HP", "Infernum (blue): if two enemies are lined up, aiming at the front one lets the back one get hit by the cone blast; aiming at the back one damages the front one as the projectile passes through.\nDamage mechanics vary per target", "Crescendum (white) Q turret allows [[ALLY_TP_OK]]", "R deals area damage then auto-attacks all hit targets once with the current weapon", "...I give up"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  
  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default aphelios;
