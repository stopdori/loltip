// app/data/matchups/briar/briar_zeri.ts
import type { MatchupSummary } from "../_types";

export const briar_zeri: MatchupSummary = {
  champs: ["briar", "zeri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 제리 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 제리 E의 [[DASH]]을 끊을 수 있음.", 
        "Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]], [[FEAR]]로 제리 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "R2의 [[HOMING]] [[DASH]]으로 제리 E, E(벽이동)의 [[DASH]]을 따라갈 수 있음. \n 단, 제리와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Zeri's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Zeri's E [[DASH]].",
        "Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]], [[FEAR]] can interrupt Zeri's E (wall movement) [[SKILL_CHANNEL]] [[DASH]].",
        "R2 [[HOMING]] [[DASH]] can follow Zeri's E and E (wall movement) [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Zeri."],
    },
    zeri: {
      ko: [],
      en: [],
    },
  },
};
