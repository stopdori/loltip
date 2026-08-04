// app/data/matchups/ambessa/ambessa_camille.ts
import type { MatchupSummary } from "../_types";

export const ambessa_camille: MatchupSummary = {
  champs: ["ambessa", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 카밀 E(그렙/대기/돌진단계)의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 카밀 E의 [[STUN]], R의 [[KNOCKBACK]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Camille's E (grab/standby/dash phase) [[DASH]].", "R [[UNSTOPPABLE]] can ignore Camille's E [[STUN]] and R [[KNOCKBACK]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    camille: {
      ko: [],
      en: [],
    },
  },
};
