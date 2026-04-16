// app/data/matchups/ambessa/ambessa_rell.ts
import type { MatchupSummary } from "../_types";

export const ambessa_rell: MatchupSummary = {
  champs: ["ambessa", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 렐 W(붕괴)의 [[DASH]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 렐 Q의 [[STUN]], W(붕괴)의 [[AIRBORNE]], W(탑승)의 [[KNOCKBACK]], R의 [[GRAB]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Rell's W (iron maiden) [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Rell's Q [[STUN]], W (iron maiden) [[AIRBORNE]], W (mount) [[KNOCKBACK]], and R [[GRAB]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
