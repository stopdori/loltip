// app/data/matchups/briar/briar_smolder.ts
import type { MatchupSummary } from "../_types";

export const briar_smolder: MatchupSummary = {
  champs: ["briar", "smolder"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 스몰더 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "R2의 [[HOMING]] [[DASH]]으로 스몰더 E의 [[SKILL_CHANNEL]], [[DASH]]을 따라갈 수 있음. \n 단, 스몰더와 충돌하면 [[HOMING]] 종료."],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Smolder's E (wall movement) [[SKILL_CHANNEL]] [[DASH]].",
        "R2 [[HOMING]] [[DASH]] can follow Smolder's E [[SKILL_CHANNEL]] and [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Smolder."],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
