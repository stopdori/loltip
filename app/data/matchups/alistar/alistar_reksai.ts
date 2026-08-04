// app/data/matchups/alistar/alistar_reksai.ts
import type { MatchupSummary } from "../_types";

export const alistar_reksai: MatchupSummary = {
  champs: ["alistar", "reksai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 렉사이 매복폼 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 렉사이 매복폼 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 렉사이 매복폼 [[BA]]의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Rek'Sai's Burrow form E [[DASH]].", "E [[STUN]] cannot interrupt Rek'Sai's Burrow form E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Rek'Sai's Burrow form [[BA]] [[AIRBORNE]]."],
    },
    reksai: {
      ko: [],
      en: [],
    },
  },
};
