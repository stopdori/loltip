// app/data/matchups/amumu/amumu_hecarim.ts
import type { MatchupSummary } from "../_types";

export const amumu_hecarim: MatchupSummary = {
  champs: ["amumu", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 헤카림 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 헤카림 R의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 헤카림 E의 [[DASH]]를 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]를 무시할 수 있음. \n 단, [[FEAR]]는 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Hecarim's E and R [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Hecarim's R [[DASH]].", "R [[STUN]] can interrupt Hecarim's E [[DASH]].", "Q [[CC_BUFFER]] can ignore Hecarim's E [[KNOCKBACK]] and R [[FEAR]] and continue [[DASH]]. \n However, the [[FEAR]] still applies."],
    },
    hecarim: {
      ko: [],
      en: [],
    },
  },
};
