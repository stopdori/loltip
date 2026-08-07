// app/data/matchups/amumu/amumu_reksai.ts
import type { MatchupSummary } from "../_types";

export const amumu_reksai: MatchupSummary = {
  champs: ["amumu", "reksai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 렉사이 매복폼 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 렉사이 매복폼 E, R의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 렉사이 매복폼 E의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 렉사이 매복폼 [[BA]]의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Rek'Sai's Burrow form E and R [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Rek'Sai's Burrow form E and R [[DASH]].", "R [[STUN]] can interrupt Rek'Sai's Burrow form E [[DASH]].", "Q [[CC_BUFFER]] can ignore Rek'Sai's Burrow form [[BA]] [[AIRBORNE]] and continue [[DASH]]."],
    },
    reksai: {
      ko: [],
      en: [],
    },
  },
};
