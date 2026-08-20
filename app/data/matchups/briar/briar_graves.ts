// app/data/matchups/briar/briar_graves.ts
import type { MatchupSummary } from "../_types";

export const briar_graves: MatchupSummary = {
  champs: ["briar", "graves"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 그레이브즈 E, R(후진단계)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 그레이브즈 E, R(후진단계)의 [[DASH]]을 끊을 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 그레이브즈 E, R(후진단계)의 [[DASH]]을 따라갈 수 있음. \n 단, 그레이브즈와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Graves' E and R (backstep phase) [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Graves' E and R (backstep phase) [[DASH]].",
        "R2 [[HOMING]] [[DASH]] can follow Graves' E and R (backstep phase) [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Graves."],
    },
    graves: {
      ko: [],
      en: [],
    },
  },
};
