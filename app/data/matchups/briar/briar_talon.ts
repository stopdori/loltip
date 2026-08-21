// app/data/matchups/briar/briar_talon.ts
import type { MatchupSummary } from "../_types";

export const briar_talon: MatchupSummary = {
  champs: ["briar", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]], [[FEAR]]로 탈론 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "Q의 [[STUN]]로 탈론 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 탈론 Q의 [[DASH]]을 끊을 수 있음.", 
        "R2의 [[HOMING]] [[DASH]]으로 탈론 Q, E의 [[DASH]]을 따라갈 수 있음. \n 단, 탈론과 충돌하면 [[HOMING]] 종료."],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]], [[FEAR]] can interrupt Talon's E (wall movement) [[SKILL_CHANNEL]] [[DASH]].",
        "Q [[STUN]] cannot interrupt Talon's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Talon's Q [[DASH]].",
        "R2 [[HOMING]] [[DASH]] can follow Talon's Q and E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Talon."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
