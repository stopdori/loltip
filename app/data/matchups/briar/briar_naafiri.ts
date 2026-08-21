// app/data/matchups/briar/briar_naafiri.ts
import type { MatchupSummary } from "../_types";

export const briar_naafiri: MatchupSummary = {
  champs: ["briar", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]], [[FEAR]]로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[STUN]]로 나피리 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 나피리 E, R의 [[DASH]] 끊을 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 나피리 W의 [[UNTARGETABLE]] / E, R의 [[DASH]]을 따라갈 수 있음. \n 단, 나피리와 충돌하면 [[HOMING]] 종료."],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]], [[FEAR]] can interrupt Naafiri's R [[SKILL_CHANNEL]].",
        "Q [[STUN]] cannot interrupt Naafiri's E or R [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Naafiri's E or R [[DASH]].",
        "R2 [[HOMING]] [[DASH]] can follow Naafiri's W [[UNTARGETABLE]] / E and R [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Naafiri."],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
