import type { ChampData } from "../interactions/types";

const jhin: ChampData = {
  id: "jhin",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH"],
    W: ["ST_CONDITIONAL", "ROOT", "MS_UP"],
    E: ["E_FLASH", "SLOW", "REVEALED", "ALLY_TP_OK"],
    R: ["SLOW", "REVEALED"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["AD_UP"],
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "PROJECTILE", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"],
    W: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE_MINION", "SEPARATOR", "ST_CONDITIONAL", "ROOT"],
    E: ["DMG_MAGIC", "TIMING_CAST", "TRAP", "ZONE", "RECHARGE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "ST_DELAYED", "SLOW"],
    R: ["DMG_PHYSICAL", "TIMING_CAST", "SKILL_CHANNEL", "PROJECTILE", "PIERCE_MINION", "CANCELLABLE", "SLOW"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "W, E로 상대 진입을 잘 막으면서 카이팅", "카이팅 잘 하면서 W의 [[ROOT]]을 잘 걸어 \n 변수 상황을 많이 만드는게 좋음.", "체력이 많은 대상보다 낮은 대상 위주로 먼저 패야 좋음."
        ], en: ["Kite while using W and E to block enemy advances", "Kite well while landing W's [[ROOT]] \n to create many variable situations.", "It's better to focus on lower-health targets before high-health ones."] },
      note1: {

        ko: [
          "진의 [[BA]]는 공속 고정에 4발 제한. \n 다 쓰면 재장전 시간 필요. \n 4번째 탄환은 항상 [[CRIT]]. \n [[CRIT]] 발동 시 [[MS_UP]]. \n 단, 진의 [[CRIT]]는 150% 피해량. \n [[CRIT]]와 공속에 패널티가 있는 대신 \n 두 수치 비례한 [[AD_UP]].",

          "Q는 [[SINGLE]] [[TARGETED]] [[PROJECTILE]] [[DMG_PHYSICAL]]를 발사. \n 근처에 Q에 맞지 않은 적이 있다면 [[CHAIN]]. \n 적이 처치되면 피해가 증가되어 [[CHAIN]].",

          "W는 [[PIERCE_MINION]] [[DMG_PHYSICAL]]. \n E에 닿거나 진 또는 아군에게 피해를 입으면 \n 대상에게 [[MARK]]이 생기고 \n 이때 W를 맞히면 [[ROOT]].",

          "E의 [[PASSIVE_BONUS]]는 적 챔피언을 처치하면 \n 그 자리에 활성화 된 E를 소환.",

          "E는 [[INVISIBILITY]] [[TRAP]]을 설치. \n 적이 밟으면 [[AOE]] [[SLOW]]와 [[ST_DELAYED]] [[AOE]] [[DMG_MAGIC]].",

          "R은 잠시 저격 자세를 취하고 \n 4발의 탄환을 발사. \n [[PIERCE_MINION]]과 [[SLOW]]와 잃은체력 비례 [[DMG_PHYSICAL]]. \n 마지막 탄환은 [[CRIT]]인데 200% 적용.",
        ],

        en: [
          "Jhin's [[BA]] has a fixed attack speed and is limited to 4 shots. \n After all 4 shots, a reload time is required. \n The 4th shot always [[CRIT]]s. \n [[CRIT]] triggers [[MS_UP]]. \n However, Jhin's [[CRIT]] only deals 150% damage. \n As a penalty to [[CRIT]] and attack speed, \n both stats proportionally increase [[AD_UP]].",

          "Q fires a [[SINGLE]] [[TARGETED]] [[PROJECTILE]] [[DMG_PHYSICAL]]. \n [[CHAIN]]s to nearby enemies not hit by the initial Q. \n If the target is killed, the [[CHAIN]] deals increased damage.",

          "W deals [[PIERCE_MINION]] [[DMG_PHYSICAL]]. \n If the target has been hit by E, or damaged by Jhin or an ally, \n they are [[MARK]]ed, \n and hitting them with W applies [[ROOT]].",

          "E's [[PASSIVE_BONUS]]: killing an enemy champion \n spawns an activated E at their location.",

          "E places an [[INVISIBILITY]] [[TRAP]]. \n When triggered, deals [[AOE]] [[SLOW]] and [[ST_DELAYED]] [[AOE]] [[DMG_MAGIC]].",

          "R briefly enters sniper stance and \n fires 4 shots. \n [[PIERCE_MINION]], [[SLOW]], and [[DMG_PHYSICAL]] scaling with missing HP. \n The last shot is a [[CRIT]] at 200%.",
        ]

      },

      note2: {
        ko: [
        "진의 [[CRIT]]는 25% 감소한 피해. \n 200%에서 25% 감소라 150%.", 
        "4타는 일정시간 사용하지 않으면 자동으로 재장전. \n 이때 스킬을 사용하면 시간 초기화. \n 4타를 들고 다니는게 여러가지 이점이 많음. \n 4타 유지를 위해 덫을 깔아 지속시간 연장시키면 좋음.",
        "E의 [[INVISIBILITY]]은 \n 수정초, 바위게의 수정초 효과에 보이지 않음.",
        "E의 [[SLOW]]는 [[TRAP]] 범위 위에 있는동안 지속.", 
        "R(커튼콜)의 각도는 60도, 사거리는 3500.", "진의 총은 사실 두 자루이고. \n 오른팔은 기계팔. \n [[BA]]는 권총. Q는 기계팔에서 유탄발사. W는 장총 \n R은 두 총을 결합한 사격."
      ],
        en: ["Jhin's [[CRIT]] deals 25% reduced damage. \n 200% reduced by 25% equals 150%.", "The 4th shot reloads automatically if unused for a while. \n Using a skill resets the timer. \n Holding onto the 4th shot has many advantages. \n Place traps to extend the 4th shot buff.", "E's [[INVISIBILITY]] is not revealed \n by Scryer's Bloom or the Rift Scuttler's vision shrine.", "E's [[SLOW]] persists while standing in the [[TRAP]] area.", "R (Curtain Call) has a 60-degree angle and 3500 range.", "Jhin actually has two guns. \n His right arm is a mechanical arm. \n [[BA]] uses a pistol. Q fires a grenade from the mechanical arm. W uses a rifle. \n R fires both guns combined."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default jhin;
