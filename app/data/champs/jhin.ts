import type { ChampData } from "../interactions/types";

const jhin: ChampData = {
  id: "jhin",
  skills: {
    P: ["AD_UP", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"],
    Q: ["Q_FLASH"],
    W: ["MARK_CONSUME", "ROOT", "MS_UP"],
    E: ["E_FLASH", "TRAP", "ALLY_TP", "SEPARATOR", "SLOW", "REVEALED", "MARK"],
    R: { phases: [
      { label: { ko: "R 탄환", en: "R Bullet" }, tags: ["REVEALED", "SLOW"] },
      { label: { ko: "R 4번째 탄환", en: "R 4th Bullet" }, tags: ["CRIT", "REVEALED", "SLOW"] },
    ] },
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
      { label: { ko: "P 공격력 증가", en: "P AD Up" }, tags: ["AD_UP"] },
      { label: { ko: "P 이동속도 증가", en: "P MS Up" }, tags: ["ST_CONDITIONAL", "MS_UP"] },
    ] },
    
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "PROJECTILE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CHAIN", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "ADDITIONAL"],

    W: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE_MINION", "SEPARATOR", "ST_CONDITIONAL", "ROOT"],

    E: { phases: [
      { label: { ko: "E 함정", en: "E Trap" }, tags: ["TIMING_CAST", "TRAP", "RECHARGE"] },
      { label: { ko: "E 함정 발동", en: "E Trap Trigger" }, tags: ["DMG_MAGIC", "ZONE", "MARK", "SLOW"] },
    ] },

    R: { phases: [
      { label: { ko: "R 준비", en: "R Wind-up" }, tags: ["TIMING_CAST", "SKILL_CHANNEL", "CANCELLABLE"] },
      { label: { ko: "R 탄환", en: "R Bullet" }, tags: ["DMG_PHYSICAL", "PIERCE_MINION", "PROJECTILE", "SEPARATOR", "REVEALED", "SLOW"] },
      { label: { ko: "R 4번째 탄환", en: "R 4th Bullet" }, tags: ["DMG_PHYSICAL", "PIERCE_MINION", "PROJECTILE", "CRIT", "SEPARATOR", "REVEALED", "SLOW"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "진의 [[BA]]는 [[AS_SCALE]]가 고정. \n 대신 [[AS_SCALE]], [[CRIT]] 확률에 비례한 [[AD_UP]]. \n 4발 탄창이고 다 쓰면 재장전. \n 4번째 탄환은 항상 \n [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_PHYSICAL]]와 [[CRIT]] 공격.", 
          "진은 [[CRIT]] 데미지가 25% 감소 되지만 \n [[CRIT]] 발동 시 [[MS_UP]]. \n \n",

          "Q는 [[SINGLE]] [[TARGETED]] [[DMG_PHYSICAL]] [[PROJECTILE]] 발사. \n Q에 맞지 않은 적이 근처에 있다면 [[CHAIN]]. \n [[ON_KILL]] 다음 [[CHAIN]] [[DMG_PHYSICAL]] 증가.\n \n",

          "W는 [[PIERCE_MINION]] [[DMG_PHYSICAL]] [[PROJECTILE]] 발사. \n 진 또는 아군에게 피해를 받거나 \n E에 닿은 대상은 [[MARK]]. \n [[MARK]] 대상을 W로 맞히면 [[ROOT]] 추가. \n [[ROOT]]이 발동하면 P의 [[MS_UP]] 발동. \n \n",

          "E는 [[INVISIBILITY]] [[TRAP]]을 설치. \n 적이 밟으면 [[AOE]] [[SLOW]]와 [[MARK]], [[REVEALED]]. \n 잠시 후 [[DETONATE]]하여 [[AOE]] [[DMG_MAGIC]].",
          "E의 [[PASSIVE_BONUS]]는 진이 적 챔피언 [[ON_KILL]] \n 잠시 후 [[DETONATE]] 하는 E를 [[SUMMON]]. \n \n",

          "R은 총 4발을 쏘는 저격 자세를 준비. ([[SKILL_CHANNEL]]) \n [[PIERCE_MINION]] [[PROJECTILE]]를 발사. \n [[TARGET_MISSING_HP_SCALE]] [[DMG_PHYSICAL]]와 [[SLOW]], [[REVEALED]]. \n 마지막 탄환은 항상 [[CRIT]].",
        ],

        en: ["Jhin's [[BA]] has a fixed [[AS_SCALE]]. \n Instead, he gains [[AD_UP]] based on [[AS_SCALE]] and [[CRIT]] chance. \n It holds 4 shots and reloads when empty. \n The 4th shot always deals \n [[DMG_PHYSICAL]] based on [[TARGET_MISSING_HP_SCALE]] and is a [[CRIT]].",
          "Jhin's [[CRIT]] damage is reduced by 25%, but \n a [[CRIT]] triggers [[MS_UP]]. \n \n",
          "Q fires a [[SINGLE]] [[TARGETED]] [[DMG_PHYSICAL]] [[PROJECTILE]]. \n If enemies not yet hit by Q are nearby, it [[CHAIN]]s. \n [[ON_KILL]], the next [[CHAIN]]'s [[DMG_PHYSICAL]] increases.\n \n",
          "W fires a [[PIERCE_MINION]] [[DMG_PHYSICAL]] [[PROJECTILE]]. \n Targets damaged by Jhin or allies, \n or touched by E, are [[MARK]]ed. \n Hitting a [[MARK]]ed target with W adds [[ROOT]]. \n When [[ROOT]] triggers, P's [[MS_UP]] activates. \n \n",
          "E places an [[INVISIBILITY]] [[TRAP]]. \n When an enemy steps on it: [[AOE]] [[SLOW]], [[MARK]], and [[REVEALED]]. \n Shortly after, it [[DETONATE]]s for [[AOE]] [[DMG_MAGIC]].",
          "E's [[PASSIVE_BONUS]]: when Jhin gets an enemy champion [[ON_KILL]], \n [[SUMMON]]s an E that [[DETONATE]]s shortly after. \n \n",
          "R readies a sniping stance that fires 4 shots in total. ([[SKILL_CHANNEL]]) \n Fires [[PIERCE_MINION]] [[PROJECTILE]]s. \n [[DMG_PHYSICAL]] based on [[TARGET_MISSING_HP_SCALE]], [[SLOW]], and [[REVEALED]]. \n The last shot is always a [[CRIT]]."
        ]

      },

      note2: {
        ko: [
        "진의 [[CRIT]]는 25% 감소한 피해. \n 200%에서 25% 감소라 150%.", 
        "4타는 일정시간 사용하지 않으면 자동으로 재장전. \n 이때 스킬을 사용하면 시간 초기화. \n 4타를 들고 다니는게 여러가지 이점이 많음. \n 4타 유지를 위해 덫을 깔아 지속시간 연장시키면 좋음.",
        "E([[TRAP]])의 [[INVISIBILITY]]은 \n 수정초, 바위게의 수정초 효과에 보이지 않음.",
        "E의 [[DOT]] [[SLOW]]는 [[TRAP]] 범위 위에 있는동안 지속.", 
        "R(커튼콜)의 각도는 60도, 사거리는 3500.", "진의 총은 사실 두 자루이고. \n 오른팔은 기계팔. \n [[BA]]는 권총. Q는 기계팔에서 유탄발사. W는 장총 \n R은 두 총을 결합한 사격."
      ],
        en: ["Jhin's [[CRIT]] deals 25% reduced damage. \n 200% reduced by 25% equals 150%.",
          "The 4th shot reloads automatically if unused for a while. \n Using a skill resets the timer. \n Holding onto the 4th shot has many advantages. \n Place traps to extend its duration and keep the 4th shot.",
          "E ([[TRAP]])'s [[INVISIBILITY]] is not revealed \n by Scryer's Bloom or the Rift Scuttler's vision shrine.",
          "E's [[DOT]] [[SLOW]] lasts while standing in the [[TRAP]] area.",
          "R (Curtain Call) has a 60-degree angle and 3500 range.",
          "Jhin actually has two guns. \n His right arm is a mechanical arm. \n [[BA]] uses a pistol. Q fires a grenade from the mechanical arm. W uses a rifle. \n R fires both guns combined."
        ]
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

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_jhinpassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.16)로 채움(CDragon 게임 데이터 jhin.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "진이 사용하는 총은 [[AS_SCALE]]가 고정되어 있으며 4발을 발사한 후엔 재장전해야 합니다. \n 4번째 총탄은 언제나 [[CRIT]]가 발동되며, [[TARGET_MISSING_HP_SCALE]] 비례의 15/20/25%([[LEVEL_SCALE]] 비례)만큼 추가 [[DMG_PHYSICAL]]를 입힙니다. \n \n 추가 효과: \n - 진이 4~44%([[LEVEL_SCALE]] 비례)(+[[CRIT]] 확률 1%당 0.35%)(+추가 [[AS_SCALE]] 1%당 0.3%)의 추가 [[AD_SCALE]]을 얻습니다. \n - 진의 [[CRIT]] 피해량이 25% 감소하지만, 2초 동안 [[MS_SCALE]]가 14%(+추가 [[AS_SCALE]] 1%당 0.44%) 증가합니다.",
      en: "Jhin's gun has a fixed [[AS_SCALE]] and must reload after firing 4 shots. \n The 4th shot always [[CRIT]]s and deals additional [[DMG_PHYSICAL]] equal to 15/20/25% (based on [[LEVEL_SCALE]]) of [[TARGET_MISSING_HP_SCALE]]. \n \n Additional effects: \n - Jhin gains 4~44% (based on [[LEVEL_SCALE]]) (+0.35% per 1% [[CRIT]] chance) (+0.3% per 1% bonus [[AS_SCALE]]) bonus [[AD_SCALE]]. \n - Jhin's [[CRIT]] damage is reduced by 25%, but his [[MS_SCALE]] increases by 14% (+0.44% per 1% bonus [[AS_SCALE]]) for 2 seconds.",
    },
    Q: {
      ko: "진이 폭탄을 던져 44/69/94/119/144(+44/51.5/59/66.5/74% [[AD_SCALE]])(+60% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입힌 후, \n 아직 폭탄에 맞지 않은 근처의 적에게 튕깁니다. ([[CHAIN]]) \n \n 폭탄은 최대 4번까지 적을 맞힐 수 있으며, \n 폭탄으로 적 [[ON_KILL]] 그다음 타격의 피해량이 35%씩 늘어납니다. \n \n 7/6.5/6/5.5/5초의 [[COOLDOWN]].",
      en: "Jhin throws a grenade, dealing 44/69/94/119/144 (+44/51.5/59/66.5/74% [[AD_SCALE]]) (+60% [[AP_SCALE]]) [[DMG_PHYSICAL]], \n then it bounces to a nearby enemy not yet hit. ([[CHAIN]]) \n \n The grenade can hit up to 4 times, \n and each [[ON_KILL]] with the grenade increases the next hit's damage by 35%. \n \n 7/6.5/6/5.5/5 second [[COOLDOWN]].",
    },
    W: {
      ko: "진이 원거리 공격을 가하여 처음 적중한 챔피언과 경로상에 있는 다른 모든 적에게 70/105/140/175/210(+50% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 이 스킬로 아군 챔피언에게 공격당한 챔피언을 4초 안에 공격했다면, \n 대상을 1.25/1.5/1.75/2/2.25초 동안 [[ROOT]]하고 속삭임(P)의 [[MS_SCALE]] 증가 효과를 얻습니다. \n \n 12초의 [[COOLDOWN]].",
      en: "Jhin fires a long-range shot, dealing 70/105/140/175/210 (+50% [[AD_SCALE]]) [[DMG_PHYSICAL]] to the first champion hit and all other enemies in its path. \n \n If it hits a champion that was damaged by an allied champion within the last 4 seconds, \n it [[ROOT]]s them for 1.25/1.5/1.75/2/2.25 seconds and grants Jhin the [[MS_SCALE]] increase from Whisper (P). \n \n 12 second [[COOLDOWN]].",
    },
    E: {
      ko: "[[PASSIVE_BONUS]]: 진이 적 챔피언 [[ON_KILL]] 해당 위치에 연꽃 함정이 설치되어 [[DETONATE]]합니다. \n \n 사용 시: 진이 3분 동안 유지되는 보이지 않는 연꽃 [[TRAP]]을 설치합니다. \n 함정을 밟은 적은 35% [[SLOW]]됩니다. \n 함정은 2초 후 [[DETONATE]]하여 20/80/140/200/260(+120% [[AD_SCALE]])(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 이 스킬은 2회까지 [[RECHARGE]]됩니다. \n \n 24/21.5/19/16.5/14초의 [[RECHARGE]] [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: When Jhin gets an enemy champion [[ON_KILL]], a lotus trap is placed at their location and [[DETONATE]]s. \n \n Active: Jhin places an invisible lotus [[TRAP]] that lasts 3 minutes. \n Enemies who step on the trap are [[SLOW]]ed by 35%. \n After 2 seconds, the trap [[DETONATE]]s, dealing 20/80/140/200/260 (+120% [[AD_SCALE]]) (+100% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n This skill holds up to 2 [[RECHARGE]] charges. \n \n 24/21.5/19/16.5/14 second [[RECHARGE]] [[COOLDOWN]].",
    },
    R: {
      ko: "진이 자세를 잡고 정신을 집중해([[SKILL_CHANNEL]]) 4발의 강력한 탄환을 발사하며, \n 각 탄환은 처음 적중한 챔피언에게 [[TARGET_MISSING_HP_SCALE]]에 비례해 64/128/192(+25% [[AD_SCALE]]) ~ 256/512/768(+100% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고, \n 0.5초 동안 80% [[SLOW]]시킵니다. \n 4번째 총탄은 [[CRIT]]가 발동되며 200%만큼 피해를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Jhin sets up and channels ([[SKILL_CHANNEL]]), firing 4 powerful shots. \n Each shot deals 64/128/192 (+25% [[AD_SCALE]]) ~ 256/512/768 (+100% [[AD_SCALE]]) [[DMG_PHYSICAL]] to the first champion hit based on [[TARGET_MISSING_HP_SCALE]], \n and [[SLOW]]s them by 80% for 0.5 seconds. \n The 4th shot [[CRIT]]s, dealing 200% damage. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default jhin;
