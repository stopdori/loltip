import type { ChampData } from "../interactions/types";

const graves: ChampData = {
  id: "graves",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "NEAR_SIGHT", "SLOW"],
    E: ["E_FLASH", "AA_RESET", "DASH", "WALL_HOP"],
    R: ["R_FLASH", "DASH", "WALL_HOP", "CC_BUFFER"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["VOLLEY_OVERLAP", "PROJECTILE"],
    Q: { phases: [
      { label: { ko: "가는 Q", en: "Initial Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "ZONE"] },
      { label: { ko: "폭발 하고 오는 Q", en: "Return Q" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "PROJECTILE", "ZONE"] },
    ] },
    
    W: ["DMG_MAGIC", "PROJECTILE", "ZONE", "SLOW", "NEAR_SIGHT"],

    E: ["AA_RESET", "DASH", "WALL_HOP", "BUFF_STACK"],
    
    R:{ phases: [
      { label: { ko: "준비단계", en: "Wind-up" }, tags: ["TIMING_CAST", "CC_BUFFER"] },
      { label: { ko: "후진단계", en: "Retreat" }, tags: ["ST_DELAYED", "DASH", "WALL_HOP"] },
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "PIERCE_MINION"] },
      { label: { ko: "R 폭발", en: "R Explodes" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "AOE"] },
    ] },
     
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "우리팀 딜러들과 같이 앞라인부터 패면서 \n 상대 뒷라인에 W와 R을 잘 던져보기.",
        ], en: [
          "Fight alongside your team's carries through the frontline \n while throwing W and R into the enemy backline.",
        ] },
      note1: {

        ko: [
          "그브 [[BA]]는 2발 샷건 \n 1발에 4개의 [[PROJECTILE]]를 한번에 발사. \n 최초 1개만 피해가 쌔고 중첩 적중당 1/3 데미지 추가. \n 다 쓰면 재장전.",

          "Q는 탄환을 발사하여 경로에 데미지. \n 잠시 뒤 폭발하여 범위 피해를 주고 탄환이 돌아옴. \n 벽에 닿으면 즉시 폭발과 복귀. \n 폭발이나 돌아오는 탄환에 닿으면 추가 데미지.",

          "W는 [[AOE]] [[NEAR_SIGHT]]. \n 그리고 잠깐의 [[SLOW]].",

          "E는 [[DASH]]과 [[AR_MR_UP]] [[BUFF]] 1개, [[BA]] 한발 즉시 장전. \n 상대 방향으로 [[DASH]]하면 [[BUFF]] 2개. 최대 8개. \n 미니언이 아닌 대상을 공격하면 [[BUFF]] 유지. \n E는 [[AA_RESET]] 가능.",

          "R은 전방에 탄환 발사. \n 탄환에 맞으면 데미지. \n 적중하거나 끝에 다다르면 폭발하여 [[AOE]]피해. \n 두 피해는 중첩되지 않음. \n [[CC_BUFFER]]로 일부 CC 무시 가능.",
        ],

        en: [
          "Graves's [[BA]] is a shotgun. \n Each shot fires 4 [[PROJECTILE]]s at once. \n The first pellet deals full damage; each additional hit adds 1/3 damage. \n Reloads after all shots are spent.",
          "Q fires a bullet that deals damage along its path. \n After a brief delay, it explodes for area damage and the bullet returns. \n Hitting a wall causes immediate explosion and return. \n The explosion and returning bullet deal bonus damage.",
          "W creates [[AOE]] [[NEAR_SIGHT]] \n and a brief [[SLOW]].",
          "E [[DASH]]es and grants 1 [[AR_MR_UP]] [[BUFF]] stack and instantly reloads 1 shot. \n Dashing toward an enemy grants 2 stacks instead. Max 8 stacks. \n Attacking non-minion targets maintains the [[BUFF]]. \n [[AA_RESET]] is possible.",
          "R fires a cannonball forward. \n The cannonball deals damage on hit. \n On hit or at max range, it explodes for [[AOE]] damage. \n The two damage instances do not stack. \n [[CC_BUFFER]] allows ignoring some CC.",
        ]

      },

      note2: {
        ko: [
        "그브 [[BA]]의 치명타는 일반 치명타와 다르게 \n 1발에 6개 [[PROJECTILE]]와 50% 추가데미지.", "E의 버프는 수정초, 꿀열매, 솔방울탄을 공격해도 유지.", "두꺼운벽에 붙어서 평E평하면 평캔 엄청빠름"
      ],
        en: ["Graves's critical [[BA]] fires 6 [[PROJECTILE]]s per shot with 50% bonus damage, unlike a normal crit.", "E's buff is maintained when attacking Honeyfruit, Blast Cones, and Scryer's Bloom.", "Hugging a thick wall and using AA-E-AA creates extremely fast AA cancels."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 80,
    16: 60,
  },

};

export default graves;
