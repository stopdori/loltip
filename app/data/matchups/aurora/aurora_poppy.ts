// app/data/matchups/aurora/aurora_poppy.ts
import type { MatchupSummary } from "../_types";

export const aurora_poppy: MatchupSummary = {
  champs: ["aurora", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]]로 뽀삐 E의 [[KNOCKBACK]] [[STUN]] / 짧게 누른 R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, W의 [[KNOCKBACK]]으로 밀려나다가 [[DASH]] 발동.", 
        "오로라 R의 [[UNSTOPPABLE]] [[DASH]]으로 뽀삐 W의 [[GROUNDED]] [[AURA]] / E의 [[KNOCKBACK]] [[STUN]] / R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, 뽀삐 W의 [[GROUNDED]]에 [[DASH]]이 막히지 않음 않음."],
      en: [""],
    },
    poppy: {
      ko: ["뽀삐 W의 [[ANTI_DASH]]로 오로라 R의 [[DASH]]을 [[UNSTOPPABLE]]로 인해 막을 수 없음.", "뽀삐 W의 [[ANTI_DASH]]로 오로라 W, E의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음. \n 단, [[GROUNDED]]에 걸렸을 때, 오로라의 R도 [[DASH]]여서 사용 할 수 없음."],
      en: [],
    },
  },
};
