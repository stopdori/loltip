// app/data/matchups/akali/akali_sion.ts
import type { MatchupSummary } from "../_types";

export const akali_sion: MatchupSummary = {
  champs: ["akali", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: [],
      en: [],
    },
    sion: {
      ko: ["사이온 R에 아칼리 E2가 정면에서 부딪히면, 아칼리만 데미지 [[AIRBORNE]] [[STUN]]을 받음. 사이온 R은 해제.",
        "사이온 R에 아칼리 R1이 부딪히면, 서로 데미지를 받고 아칼리는 R2를 사용할 수 있음. 사이온 R은 해제.",
        "사이온 R에 아칼리 R2가 부딪히면, 판정이 거의 랜덤임. \n 각도의 차이인 것 같아서 정면에서만 실험해 봤는데도 경우가 다르게 나옴. \n 1. 서로 데미지를 입고 아칼리가 [[AIRBORNE]] [[STUN]]에 걸림. \n 2. 아칼리만 데미지를 입고 [[AIRBORNE]] [[STUN]]에 걸림. 사이온은 멀쩡. \n 3. 사이온만 데미지를 입고 아칼리가 사이온을 무시하고 지나감. 사이온 R은 해제되지 않음. \n 정확한 이유 알고 계신 분 제보 부탁드림."],
      en: ["If Akali's E2 collides head-on with Sion's R, only Akali takes damage and is hit with [[AIRBORNE]] [[STUN]]. Sion's R is canceled.",
        "If Akali's R1 collides with Sion's R, both take damage and Akali can still use R2. Sion's R is canceled.",
        "If Akali's R2 collides with Sion's R, the outcome is nearly random. \n It may vary by angle — even testing head-on yielded different results. \n 1. Both take damage and Akali is hit with [[AIRBORNE]] [[STUN]]. \n 2. Only Akali takes damage and is hit with [[AIRBORNE]] [[STUN]]; Sion is unaffected. \n 3. Only Sion takes damage and Akali passes through him. Sion's R is not canceled. \n If you know the exact reason, please let us know."],
    },
  },
};
