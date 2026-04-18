// app/data/matchups/aatrox/aatrox_malzahar.ts
import type { MatchupSummary } from "../_types";

export const aatrox_malzahar: MatchupSummary = {
  champs: ["aatrox", "malzahar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 말자하 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Aatrox's W [[TETHER]] effect persists even when hitting Malzahar's P [[CC_IMMUNE]]. \n The [[GRAB]] effect can still trigger afterward.", "Aatrox's Q [[AIRBORNE]] and W [[GRAB]] can interrupt Malzahar's R [[SKILL_CHANNEL]]."],
    },
    malzahar: {
      ko: ["말자하 P의 [[CC_IMMUNE]]으로 아트록스 Q의 [[AIRBORNE]]을 무시할 수 있음. \n 단, 데미지는 감소되어 유효.",
        "말자하 W의 공허충 [[SUMMON]]으로 아트록스 W의 [[SINGLE]] [[PROJECTILE]]를 대신 맞을 수 있음."
      ],
      en: ["Malzahar's P [[CC_IMMUNE]] can ignore Aatrox's Q [[AIRBORNE]].", "Malzahar's W Void Swarm [[SUMMON]] can intercept Aatrox's W [[SINGLE]] [[PROJECTILE]]."],
    },
  },
};
