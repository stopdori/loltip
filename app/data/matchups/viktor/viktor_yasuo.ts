// app/data/matchups/viktor/viktor_yasuo.ts
import type { MatchupSummary } from "../_types";

export const viktor_yasuo: MatchupSummary = {
  champs: ["viktor", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    viktor: {
      ko: ["W의 [[STUN]]로 야스오 E의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", "W의 [[STUN]], R의 [[DISRUPT]]로 야스오 R을 끊을 수 없음."],
      en: ["W [[STUN]] can interrupt Yasuo's E [[SKILL_CHANNEL]] [[DASH]].", "W [[STUN]] and R [[DISRUPT]] cannot interrupt Yasuo's R."],
    },
    yasuo: {
      ko: ["야스오 W의 [[WINDSHIELD]]으로 빅토르의 평타, Q, E의 [[PROJECTILE]]를 막을 수 있음. \n 단, Q의 [[ON_HIT]], 장막 넘어로 쏜 E의 [[PROJECTILE]]는 막을 수 없음."],
      en: ["Yasuo's W [[WINDSHIELD]] can block Viktor's basic attacks, Q, and E [[PROJECTILE]]. \n However, it cannot block Q's [[ON_HIT]] or E's [[PROJECTILE]] fired from beyond the wall."],
    },
  },
  common: {
    ko: ["특이한 판정 \n 야스오 W의 [[WINDSHIELD]]으로 빅토르의 E, [[EMPOWERED]] E의 [[PROJECTILE]]를 조건부로 막을 수 있음. \n \n 빅토르 E의 [[SKILL_VECTOR]] 시작점을 장막 앞부분에 사용하면 [[PROJECTILE]]가 [[WINDSHIELD]]에 막히고. \n [[SKILL_VECTOR]] 시작점을 장막 뒷부분에 사용하면 [[PROJECTILE]]가 막히지 않음. \n [[EMPOWERED]] E의 추가 폭발 효과도 동일한 판정. [[CLIP:https://www.youtube.com/shorts/t12mVToWxl0]]"],
    en: ["Unusual interaction \n Yasuo's W [[WINDSHIELD]] can conditionally block the [[PROJECTILE]] from Viktor's E and [[EMPOWERED]] E. \n \n If Viktor uses E's [[SKILL_VECTOR]] starting point in front of the wall, the [[PROJECTILE]] is blocked by [[WINDSHIELD]]. \n If the [[SKILL_VECTOR]] starting point is used behind the wall, the [[PROJECTILE]] is not blocked. \n The [[EMPOWERED]] E's additional explosion effect follows the same rule. [[CLIP:https://www.youtube.com/shorts/t12mVToWxl0]]"],
  },
};
