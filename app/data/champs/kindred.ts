import type { ChampData } from "../interactions/types";

const kindred: ChampData = {
  id: "kindred",
  skills: {
    P: [],
    Q: ["AS_UP", "WALL_HOP", "AA_RESET"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SLOW"],
    R: ["HEAL", "INVULNERABLE"],
  },

  vision: {
    P: [],
    Q: [],
    W: ["VISION"],
    E: ["POSITION_REVEAL"],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "STACKING"],
    Q: { phases: [
      { label: { ko: "도약단계", en: "Dash" }, tags: ["DASH"] },
      { label: { ko: "발사단계", en: "Shot" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "VOLLEY", "HOMING", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CDR"] },
    ] },

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "BUFF_STACK"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["DMG_MAGIC", "ZONE"] },
    ] },

    E: ["TIMING_CAST", "TARGETED", "PROJECTILE", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL" ],

    R: ["TIMING_CAST", "ZONE", "ST_CONDITIONAL", "INVULNERABLE", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "원딜인데 핑퐁하는 원딜 느낌.",
        ], en: [
          "Feels like an ADC that ping-pongs around.",
        ] },
      note1: {

        ko: [
          "P는 조건에 따라 [[MARK]]을 획득. \n 챔피언을 지정하는 [[MARK]]은 쿨타임이 있음. \n 챔피언과 교전 중에 지정할 수 없음. \n 갱 가기 직전에 지정하고 가는 게 좋음. \n 한번 수확한 챔피언은 한동안 지정할 수 없음. \n \n 정글에 뜨는 첫 [[MARK]]은 바위게에 랜덤으로 뜸. \n 그다음부터는 바위게, 상대 정글, 에픽에 랜덤으로 뜸. \n \n 표식 효과. \n 4스택 획득 시 사거리 75 증가. \n 이후 3스택마다 25 증가. 최대 750. (25스택). \n \n QWE 효과는 하단에 후술.",

          "Q는 [[AS_UP]] [[BUFF]]. \n 3명에게 [[DMG_PHYSICAL]]. \n [[MARK]]당 버프효과 증가.",

          "W의 [[PASSIVE_BONUS]]는 이동하거나 공격하면 스택이 쌓이고 \n 100이 쌓인 후 다음 [[BA]] 공격 시 [[HEAL]]. \n \n W는 늑대가 공격하는 지대를 생성. \n 늑대는 킨드가 공격한 대상을 주기적으로 공격. \n 지대 위에서 Q를 사용하면 Q의 쿨타임이 감소. \n [[MARK]]당 현재 체력 비례 데미지 증가.",

          "E는 대상 잠깐 [[SLOW]]. \n [[BA]]를 3번 치면 잃은체력 비례 [[DMG_PHYSICAL]]. \n [[MARK]]당 잃은 체력 비례 데미지 증가.",

          "R은 축복의 지대를 생성. \n 모든 유닛의 체력이 10% 밑으로 떨어지지 않음. \n 10%가 되면 [[HEAL]] 불가. \n 지대가 사라지면서 모든 유닛 [[HEAL]].",
        ],

        en: [
          "P gains a [[MARK]] under certain conditions. \n Marking a champion has a cooldown. \n Cannot mark a champion while engaged with them. \n Best to mark right before going for a gank. \n A champion that has already been harvested cannot be marked again for a while. \n \n The first [[MARK]] in the jungle appears randomly on a Crab. \n After that, it appears randomly on Crabs, the enemy jungle, or epic monsters. \n \n Mark effects. \n Range increases by 75 at 4 stacks. \n Increases by 25 every 3 stacks after that, up to 750 (25 stacks). \n \n QWE effects are detailed below.",

          "Q is an [[AS_UP]] [[BUFF]]. \n Deals [[DMG_PHYSICAL]] to up to 3 targets. \n The buff effect increases per [[MARK]].",

          "W's [[PASSIVE_BONUS]] stacks when moving or attacking, \n and after reaching 100 stacks, the next [[BA]] grants [[HEAL]]. \n \n W creates a zone where the wolf attacks. \n The wolf periodically attacks targets Kindred has attacked. \n Using Q inside the zone reduces Q's cooldown. \n Damage scaling with current HP increases per [[MARK]].",

          "E briefly [[SLOW]]s the target. \n Landing 3 [[BA]] deals [[DMG_PHYSICAL]] based on missing health. \n Damage based on missing health increases per [[MARK]].",

          "R creates a zone of blessing. \n No unit's HP can drop below 10% while inside. \n Once at 10%, [[HEAL]] is not possible. \n When the zone ends, all units are [[HEAL]]ed.",
        ]

      },

      note2: {
        ko: [
        "[[R_FLASH]] 안됨.",
        "Q는 두단계로 나뉨. 도약/발사\n도약단계 중에 [[AIRBORNE]]류, [[FEAR]], [[SUPPRESS]], [[SLEEP]]을 맞으면 \n 발사단계를 하지 않음.",
        "Q를 미리쓰고 W를 써도 쿨타임이 줄어듬.",
        "Q, W는 상대가 보여야 공격이 닿음.\nW로 부쉬안을 보고 싶으면 부쉬안에 W를 써야함.",
        "챔피언을 지정하는 P는 스킬가속의 영향을 받지 않음.",
        "W의 늑대 공격속도는 킨드레드 공격속도에 비례.",
        "R은 체력이 10% 일때 [[HEAL]]은 불가능 하지만, [[MAX_HP_UP]] 가능."
      ],
        en: [
        "[[R_FLASH]] is not possible.",
        "Q is split into two phases: Dash/Shot.\nIf hit by [[AIRBORNE]]-type effects, [[FEAR]], [[SUPPRESS]], or [[SLEEP]] during the dash phase, \n the shot phase does not occur.",
        "Casting Q in advance and then using W still reduces its cooldown.",
        "Q and W only land if the target is visible.\nTo see inside a bush with W, you must cast W inside the bush.",
        "P's champion-marking ability is not affected by ability haste.",
        "The wolf's attack speed from W scales with Kindred's attack speed.",
        "At 10% HP, [[HEAL]] is not possible with R, but [[MAX_HP_UP]] still works."
      ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

};

export default kindred;
