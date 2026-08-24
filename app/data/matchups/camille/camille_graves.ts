// app/data/matchups/camille/camille_graves.ts
import type { MatchupSummary } from "../_types";

export const camille_graves: MatchupSummary = {
  champs: ["camille", "graves"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 그레이브즈 E, R의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]]로 그레이브즈 평타, Q, W, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Graves's E and R [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Graves's basic attacks, Q, W, and R."],
    },
    graves: {
      ko: ["R의 [[CC_BUFFER]]로 카밀 E의 [[KNOCKBACK]], [[STUN]] / R의 [[KNOCKBACK]]을 무시하고 [[DASH]]을 할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Graves's R [[CC_BUFFER]] can ignore Camille's E [[KNOCKBACK]], [[STUN]] / R [[KNOCKBACK]] and still [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
