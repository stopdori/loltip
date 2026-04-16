// app/data/matchups/ambessa/ambessa_urgot.ts
import type { MatchupSummary } from "../_types";

export const ambessa_urgot: MatchupSummary = {
  champs: ["ambessa", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 우르곳 E의 [[DASH]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 우르곳 E의 [[GRAB]], [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 우르곳 R2의 [[SUPPRESS]], [[EXECUTE]]를 무시할 수 없음. \n 단, 암베사의 R이 발동은 되지만 결국 [[SUPPRESS]] 당하여 끌려가 [[EXECUTE]]당함."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Urgot's E [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Urgot's E [[GRAB]] and [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends.", "Ambessa's R [[UNSTOPPABLE]] cannot ignore Urgot's R2 [[SUPPRESS]] and [[EXECUTE]]. \n However, Ambessa's R does activate, but she ultimately gets [[SUPPRESS]]ed and dragged in, then [[EXECUTE]]d."],
    },
    urgot: {
      ko: [],
      en: [],
    },
  },
};
